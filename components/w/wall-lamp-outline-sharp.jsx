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
		"content": `<style>.tgvx1jbso {
  fill: currentColor;
  d: path("M3.73 20v-5h1v5zm4.62-8h9.3l-1.8-6h-5.7zm0 0h9.3zM6.5 18v-1h6v-4H6.996L9.4 5h7.2l2.404 8H13.5v5z");
}
</style><path class="tgvx1jbso"/>`,
		"fallback": "material-symbols-light:wall-lamp-outline-sharp",
	});
}

export default Component;
