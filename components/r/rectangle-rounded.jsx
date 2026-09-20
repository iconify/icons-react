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
		"content": `<style>.qqhgd4nav {
  fill: currentColor;
  d: path("M4.616 19q-.667 0-1.141-.475T3 17.386V6.615q0-.666.475-1.14T4.615 5h14.77q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="qqhgd4nav"/>`,
		"fallback": "material-symbols-light:rectangle-rounded",
	});
}

export default Component;
