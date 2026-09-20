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
		"content": `<style>.jc5369bqr {
  fill: currentColor;
  d: path("M3 19V9.375q0-.625.35-1.137t.925-.738L14.65 3.525q.5-.2.925.1T16 4.45V12h1q0-.825.588-1.412T19 10t1.413.588T21 12v7q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m2 0h4v-5q0-.825.588-1.412T11 12h3V5.9L5 9.375zm6 0h3v-2q0-.425.288-.712T15 16t.713.288T16 17v2h3v-5h-8zm4-2.5");
}
</style><path class="jc5369bqr"/>`,
		"fallback": "material-symbols:villa-outline-rounded",
	});
}

export default Component;
