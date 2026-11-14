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
		"content": `<style>.v_vojpoas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm0 6.25h15m-15 6.5h15m-12-9.5h4M7.5 12h4m-4 6.5h4M16 5.75h.01M16 12h.01M16 18.5h.01");
}
</style><path class="v_vojpoas"/>`,
		"fallback": "uix-sharp:network-rack",
	});
}

export default Component;
