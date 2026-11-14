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
		"content": `<style>.fmlbgsbbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h16v11.5H4Zm4 0v11.5M12 6v11.5M16 6v11.5m-10 3v-3m12 3v-3");
}
</style><path class="fmlbgsbbj"/>`,
		"fallback": "uix-sharp:radiator",
	});
}

export default Component;
