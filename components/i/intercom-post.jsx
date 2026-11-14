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
		"content": `<style>.c_wawyjww {
  d: path("M14.25 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.ercc4pbmh {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v3a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 9V6a3.5 3.5 0 0 1 3.5-3.5m4.5 10v9m-3.5 0h7M7 6h4.5M7 9h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ercc4pbmh"/><path class="c_wawyjww"/></g>`,
		"fallback": "uix:intercom-post",
	});
}

export default Component;
