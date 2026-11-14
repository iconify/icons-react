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

.l3fr2ugvh {
  d: path("M9.5 5a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0");
}

.uherkgb3d {
  d: path("M9.5 5v5a5 1.75 0 0 0 10 0V5M6 4v17.5M6 9h3.5M3 21.5h6");
}
</style><g class="hntgybcog"><path class="l3fr2ugvh"/><path class="uherkgb3d"/></g>`,
		"fallback": "uix:korfball",
	});
}

export default Component;
