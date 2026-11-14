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
		"content": `<style>.dj8l18b2n {
  d: path("M2.5 12a7.5 9.5 0 1 0 15 0a7.5 9.5 0 1 0-15 0");
}

.ghbstfbku {
  d: path("M7.25 12a2.75 3.75 0 1 0 5.5 0a2.75 3.75 0 1 0-5.5 0m-1.5-3.5a5 7 0 0 0 0 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tknrb0bwh {
  d: path("M10 2.5h3a7.5 9.5 0 0 1 0 19h-3");
}
</style><g class="hntgybcog"><path class="dj8l18b2n"/><path class="tknrb0bwh"/><path class="ghbstfbku"/></g>`,
		"fallback": "uix:tyre-hard",
	});
}

export default Component;
