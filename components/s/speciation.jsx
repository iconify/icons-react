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
		"content": `<style>.eslw69b8c {
  d: path("M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omou6bb8f {
  d: path("M12 21.5V14c0-4-3-5-5.5-7.5M12 14c0-4 3-5 5.5-7.5M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="omou6bb8f"/><path class="eslw69b8c"/></g>`,
		"fallback": "uix:speciation",
	});
}

export default Component;
