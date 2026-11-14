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
		"content": `<style>.fd61kidss {
  d: path("M11.125 9h1.75a2.625 2.625 0 0 1 2.625 2.625v7.25a2.625 2.625 0 0 1-2.625 2.625h-1.75A2.625 2.625 0 0 1 8.5 18.875v-7.25A2.625 2.625 0 0 1 11.125 9M11 6h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 9h-2a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i77lofbpj {
  d: path("M10.25 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8.5 13h7m-7 5h7");
}
</style><g class="hntgybcog"><path class="fd61kidss"/><path class="i77lofbpj"/></g>`,
		"fallback": "uix:roll-on-perfume",
	});
}

export default Component;
