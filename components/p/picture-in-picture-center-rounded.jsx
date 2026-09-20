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
		"content": `<style>.bh2le6wvd {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm5-5h6q.425 0 .713-.288T16 14v-4q0-.425-.288-.712T15 9H9q-.425 0-.712.288T8 10v4q0 .425.288.713T9 15");
}
</style><path class="bh2le6wvd"/>`,
		"fallback": "material-symbols:picture-in-picture-center-rounded",
	});
}

export default Component;
