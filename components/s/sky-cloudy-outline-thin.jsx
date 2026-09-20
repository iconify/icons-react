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

.m7ezp3bui {
  d: path("M4 15a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 6a5.5 5.5 0 0 1 4.5 9Z");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="m7ezp3bui"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:sky-cloudy-outline-thin",
	});
}

export default Component;
