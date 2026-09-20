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
		"content": `<style>.c8jtagpjt {
  d: path("M7 9v10h14V9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_u_8t5pe {
  d: path("m6 11 -3 3 3 3");
}

.leo1-zbey {
  d: path("m7 9 7 7 7 -7");
}
</style><g class="hntgybcog"><path class="c8jtagpjt"/><path class="leo1-zbey"/><path class="l_u_8t5pe"/></g>`,
		"fallback": "iconmind:rsvp-outline-thin",
	});
}

export default Component;
