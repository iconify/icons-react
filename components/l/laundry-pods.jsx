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
		"content": `<style>.a9rboj3-u {
  d: path("M2.75 8.25a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 0 0 4.5 0m.5 7.5a2.25 2.25 0 0 1 4.5 0a2.25 2.25 0 0 0 4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ls46fcc7l {
  d: path("M2.75 8.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9.5 7.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="ls46fcc7l"/><path class="a9rboj3-u"/></g>`,
		"fallback": "uix:laundry-pods",
	});
}

export default Component;
