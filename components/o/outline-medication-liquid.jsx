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
		"content": `<style>.dazs4ibex {
  fill: currentColor;
  d: path("M3 3h12v2H3zM2 21h14V6H2zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5zm15-6c-1.68 0-3 1.76-3 4c0 1.77.83 3.22 2 3.76V21h2v-7.24c1.17-.54 2-1.99 2-3.76c0-2.24-1.32-4-3-4");
}
</style><path class="dazs4ibex"/>`,
		"fallback": "ic:outline-medication-liquid",
	});
}

export default Component;
