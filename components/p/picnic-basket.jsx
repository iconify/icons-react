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
		"content": `<style>.nvhdi7hkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17L19 20.5H5Zm3 0V9a5.5 5.5 0 0 1 11 0v2M4.25 14.75h15.5m-7.75 0v5.75");
}
</style><path class="nvhdi7hkz"/>`,
		"fallback": "uix-sharp:picnic-basket",
	});
}

export default Component;
