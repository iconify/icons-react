import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jqf-ye_eb {
  fill: currentColor;
  d: path("M9.667 2a1.333 1.333 0 0 1 1.23 1.846l-2.18 5.231A1.5 1.5 0 0 1 7.334 10h-5a1.333 1.333 0 0 1-1.23-1.846l2.18-5.231A1.5 1.5 0 0 1 4.666 2z");
}
</style><path class="jqf-ye_eb"/>`,
		"fallback": "fluent:rhombus-12-filled",
	});
}

export default Component;
