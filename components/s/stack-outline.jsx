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
		"content": `<style>.xoul3b54v {
  fill: currentColor;
  d: path("M6 14v2H4q-.825 0-1.412-.587T2 14V4q0-.825.588-1.412T4 2h10q.825 0 1.413.588T16 4v2h-2V4H4v10zm4 8q-.825 0-1.412-.587T8 20V10q0-.825.588-1.412T10 8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm0-2h10V10H10zm5-5");
}
</style><path class="xoul3b54v"/>`,
		"fallback": "material-symbols:stack-outline",
	});
}

export default Component;
