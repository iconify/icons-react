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

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.xyv52kb5g {
  d: path("M8 12a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}
</style><g class="hntgybcog"><path class="ugdbidcqi"/><path class="xyv52kb5g"/></g>`,
		"fallback": "iconmind:liked-outline-thin",
	});
}

export default Component;
