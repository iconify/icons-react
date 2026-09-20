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
		"content": `<style>.ocj_x5pfj {
  fill: currentColor;
  d: path("M3.025 17V7q0-.825.588-1.412T5.025 5H19q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19H5.025q-.825 0-1.412-.587T3.025 17M5 17h3.325V7H5zm5.325 0h3.325V7h-3.325zm5.325 0h3.325V7H15.65z");
}
</style><path class="ocj_x5pfj"/>`,
		"fallback": "material-symbols:view-column-outline-rounded",
	});
}

export default Component;
