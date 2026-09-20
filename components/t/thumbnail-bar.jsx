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
		"content": `<style>.e6aflmb2e {
  fill: currentColor;
  d: path("M4.616 19q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5H8v14zM9 19V5h10.385q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="e6aflmb2e"/>`,
		"fallback": "material-symbols-light:thumbnail-bar",
	});
}

export default Component;
