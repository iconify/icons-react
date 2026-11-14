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
		"content": `<style>.daj7v51yw {
  d: path("m7.5 15.5l2-5h4L12 13h-2m6.5 2.5l-2-6l-.75-2.5h-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tc3id9jmw {
  d: path("M8.625 2.5h6.75A6.125 6.125 0 0 1 21.5 8.625v6.75a6.125 6.125 0 0 1-6.125 6.125h-6.75A6.125 6.125 0 0 1 2.5 15.375v-6.75A6.125 6.125 0 0 1 8.625 2.5");
}

.umsy6udui {
  d: path("M5 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="tc3id9jmw"/><path class="umsy6udui"/><path class="daj7v51yw"/></g>`,
		"fallback": "uix:parking-bay-motorcycle",
	});
}

export default Component;
