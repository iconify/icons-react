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
		"content": `<style>.pboztvffg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h10V6M5.5 6h15v3h-15ZM8 12v3m0 3v2.5m5-7v4m5-5.5v3m0 3v2.5");
}
</style><path class="pboztvffg"/>`,
		"fallback": "uix-sharp:rain-shower-head",
	});
}

export default Component;
