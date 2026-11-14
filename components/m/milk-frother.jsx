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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iw7tex1hg {
  d: path("m6 12l1.5 9.5h9L18 12M6 12q1.5-1.75 3 0q1.5-1.75 3 0q1.5-1.75 3 0q1.5-1.75 3 0m-6-9.5zA1.5 1.5 0 0 1 13.5 4v2.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 12 2.5M12 8v6.75");
}

.plksdhbjo {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="iw7tex1hg"/><path class="plksdhbjo"/></g>`,
		"fallback": "uix:milk-frother",
	});
}

export default Component;
