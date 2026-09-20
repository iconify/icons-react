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
		"content": `<style>.ap9wa9bsq {
  fill: currentColor;
  d: path("M12 13q1.65 0 2.825-1.175T16 9t-1.175-2.825T12 5T9.175 6.175T8 9t1.175 2.825T12 13m0-2q-.825 0-1.412-.587T10 9t.588-1.412T12 7t1.413.588T14 9t-.587 1.413T12 11m0 5q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m4 6H8v-2h1q.575 0 1.013-.275t.712-.725H7q-.825 0-1.412-.587T5 17V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v13q0 .825-.587 1.413T17 19h-3.725q.275.45.713.725T15 20h1z");
}
</style><path class="ap9wa9bsq"/>`,
		"fallback": "material-symbols:speaker-2",
	});
}

export default Component;
