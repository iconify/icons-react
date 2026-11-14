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
		"content": `<style>.qxl08hbpj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h19v13h-19Zm4 4v5m5.5-5v5m5.5-5v5m-8.25 0h.01m5.49 0h.01");
}
</style><path class="qxl08hbpj"/>`,
		"fallback": "uix-sharp:jwt",
	});
}

export default Component;
