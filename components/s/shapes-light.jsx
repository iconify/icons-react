import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qln_ddc7k {
  fill: currentColor;
  d: path("M69.69 62.1a6 6 0 0 0-11.38 0l-40 120A6 6 0 0 0 24 190h80a6 6 0 0 0 5.69-7.9ZM32.32 178L64 83l31.68 95ZM206 76a50 50 0 1 0-50 50a50.06 50.06 0 0 0 50-50m-88 0a38 38 0 1 1 38 38a38 38 0 0 1-38-38m106 70h-88a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-56a6 6 0 0 0-6-6m-6 56h-76v-44h76Z");
}
</style><path class="qln_ddc7k"/>`,
		"fallback": "ph:shapes-light",
	});
}

export default Component;
