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
		"content": `<style>.da8znvxxh {
  d: path("M3.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11 5.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r1ejtm6oq {
  d: path("M6 7.5V16a2 2 0 0 0 2 2h6.5M6 10.25h8.5");
}
</style><g class="hntgybcog"><path class="da8znvxxh"/><path class="r1ejtm6oq"/></g>`,
		"fallback": "uix:org-tree",
	});
}

export default Component;
