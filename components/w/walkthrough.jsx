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
		"content": `<style>.dngpvwzls {
  d: path("M16.25 8.25L18 6.5l1.75 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n9cwn8zus {
  d: path("M6.25 21v-7c0-1.5.75-2 2.25-2h8q1.5 0 1.5-1.5v-4");
}

.xka5zpbcw {
  d: path("M8.5 21H21V3H3v18h1m8-18v6.5m0 5V21");
}
</style><g class="hntgybcog"><path class="xka5zpbcw"/><path class="n9cwn8zus"/><path class="dngpvwzls"/></g>`,
		"fallback": "uix:walkthrough",
	});
}

export default Component;
