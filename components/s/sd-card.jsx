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
		"content": `<style>.p311rpbhj {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V8l6-6h8q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm3-11h2V7H9zm3 0h2V7h-2zm3 0h2V7h-2z");
}
</style><path class="p311rpbhj"/>`,
		"fallback": "material-symbols:sd-card",
	});
}

export default Component;
