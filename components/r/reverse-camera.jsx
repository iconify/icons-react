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
		"content": `<style>.gwc79f13p {
  d: path("M8 14.5L9.5 7m6.5 7.5L14.5 7M9 11h6m-3 6v4.25m-3.5 0h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hp4rrcbje {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 3.5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="hp4rrcbje"/><path class="gwc79f13p"/></g>`,
		"fallback": "iconoven:reverse-camera",
	});
}

export default Component;
