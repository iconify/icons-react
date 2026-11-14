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
		"content": `<style>.aomfu8kgj {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 9h3v6h-3m19-6h-3v6h3");
}

.fupvzxgbh {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5m6 0v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fupvzxgbh"/><path class="aomfu8kgj"/></g>`,
		"fallback": "uix:soccer-field-top",
	});
}

export default Component;
