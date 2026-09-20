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
		"content": `<style>.he-6-nbhf {
  d: path("M14 3v6l6 6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nq6698b_y {
  d: path("M4 3v6l6 6v6");
}
</style><g class="hntgybcog"><path class="nq6698b_y"/><path class="he-6-nbhf"/></g>`,
		"fallback": "iconmind:river-outline-thin",
	});
}

export default Component;
