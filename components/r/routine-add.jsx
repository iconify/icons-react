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
		"content": `<style>.lz4f2-i2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v3.5h-19Zm0 7h12v3.5h-12Zm0 7H12v3.5H2.5ZM18 15v6m-3-3h6");
}
</style><path class="lz4f2-i2z"/>`,
		"fallback": "uix-sharp:routine-add",
	});
}

export default Component;
