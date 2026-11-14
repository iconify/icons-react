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
		"content": `<style>.as3h_p_jm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5-6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5-6a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5.75 13.5l2.5-3m2.5 0l2.5 3m2.5 0l2.5-3");
}
</style><path class="as3h_p_jm"/>`,
		"fallback": "uix-sharp:molecule-chain",
	});
}

export default Component;
