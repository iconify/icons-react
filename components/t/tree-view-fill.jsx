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
		"content": `<style>.nmzthl_zj {
  fill: currentColor;
  d: path("M160 136v-8H88v64a8 8 0 0 0 8 8h64v-8a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-8H96a24 24 0 0 1-24-24V80h-8a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-8v32h72v-8a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16");
}
</style><path class="nmzthl_zj"/>`,
		"fallback": "ph:tree-view-fill",
	});
}

export default Component;
