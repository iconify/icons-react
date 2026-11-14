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
		"content": `<style>.ak0q50l3o {
  d: path("M7.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.25-2.5H18m-5.5 5h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4w5wyb7k {
  d: path("m3 12l5.5-7H19a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 19H8.5Z");
}
</style><g class="hntgybcog"><path class="y4w5wyb7k"/><path class="ak0q50l3o"/></g>`,
		"fallback": "uix:tag-release-notes",
	});
}

export default Component;
