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
		"content": `<style>.drx1bdb7s {
  d: path("m13 15 3 3 5 -5");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tkvxdludj {
  d: path("M6 3h9l-3 3 3 3H6");
}
</style><g class="hntgybcog"><path class="ftqzjnb8u"/><path class="tkvxdludj"/><path class="drx1bdb7s"/></g>`,
		"fallback": "iconmind:milestone-flag-outline-thin",
	});
}

export default Component;
