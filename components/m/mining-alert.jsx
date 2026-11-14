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
		"content": `<style>.qhy_4jjym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3q6.836 2.122 9.227 8.689M3 17L13.5 6.5m4.5 8V18m0 3h.01");
}
</style><path class="qhy_4jjym"/>`,
		"fallback": "uix-sharp:mining-alert",
	});
}

export default Component;
