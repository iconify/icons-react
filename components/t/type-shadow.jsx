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
		"content": `<style>.c-fipwsnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 20.5l.843-2.247m5.091-13.577L13.5 4.5l3.059 8.157m.702 1.873L19.5 20.5M4 19.5l6-16l6 16m-10.5-4h9");
}
</style><path class="c-fipwsnb"/>`,
		"fallback": "uix-sharp:type-shadow",
	});
}

export default Component;
