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
		"content": `<style>.eep78dbmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.75h19v3h-19Zm1.5 3h16V21.5H4ZM4 13h16m-8 0v8.5");
}
</style><path class="eep78dbmb"/>`,
		"fallback": "uix-sharp:roller-blind",
	});
}

export default Component;
