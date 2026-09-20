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
		"content": `<style>.du2bgcbtj {
  fill: currentColor;
  d: path("M4 18v-4.808h6.808V18zm9.192 0v-4.808H20V18zM4 10.808V6h16v4.808zM5 17h4.808v-2.808H5zm9.192 0H19v-2.808h-4.808zm2.404-1.404");
}
</style><path class="du2bgcbtj"/>`,
		"fallback": "material-symbols-light:tile-medium-outline-sharp",
	});
}

export default Component;
