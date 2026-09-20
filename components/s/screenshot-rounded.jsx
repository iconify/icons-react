import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j08yvcbfp {
  fill: currentColor;
  d: path("M14 18h-2q-.425 0-.712.288T11 19t.288.713T12 20h3q.425 0 .713-.288T16 19v-3q0-.425-.288-.712T15 15t-.712.288T14 16zm-7 5q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3.1q.45.175.725.55T20 7.5v2q0 .475-.275.85T19 10.9V21q0 .825-.587 1.413T17 23zm3-17h2q.425 0 .713-.288T13 5t-.288-.712T12 4H9q-.425 0-.712.288T8 5v3q0 .425.288.713T9 9t.713-.288T10 8z");
}
</style><path class="j08yvcbfp"/>`,
		"fallback": "material-symbols:screenshot-rounded",
	});
}

export default Component;
