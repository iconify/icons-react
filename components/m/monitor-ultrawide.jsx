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
		"content": `<style>.hfdoae_ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 6h20v9.5H2Zm10 9.5V19m-3.5 0h7");
}
</style><path class="hfdoae_ql"/>`,
		"fallback": "uix-sharp:monitor-ultrawide",
	});
}

export default Component;
