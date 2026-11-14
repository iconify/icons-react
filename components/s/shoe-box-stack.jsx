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
		"content": `<style>.ib5irsftq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19v6h-19Zm1-6h17v6h-17Zm1.5-6h14v6H5ZM2.5 17.75h19m-18-6h17M5 5.75h14");
}
</style><path class="ib5irsftq"/>`,
		"fallback": "uix-sharp:shoe-box-stack",
	});
}

export default Component;
