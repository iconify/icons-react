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
		"content": `<style>.nzysl9dwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21V6M6.25 6h15M8 6l1.5-3L11 6M6 21h7m5.5-15v8M2.75 6h3.5v3.5h-3.5zm15.75 8v3.5h-3V16");
}
</style><path class="nzysl9dwb"/>`,
		"fallback": "iconoven:tower-crane-sharp",
	});
}

export default Component;
