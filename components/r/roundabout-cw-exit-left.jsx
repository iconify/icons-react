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
		"content": `<style>.esqedqb1a {
  d: path("M19 4.5L18.25 7l-2.5-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iy48q2v4r {
  d: path("M6.5 7.25L4.25 9.5l2.25 2.25M14 14.5a5 5 0 1 0-4-8");
}

.togeb3b7u {
  d: path("M14 21.5v-7a5 5 0 0 1-5-5H4.25");
}
</style><g class="hntgybcog"><path class="togeb3b7u"/><path class="iy48q2v4r"/><path class="esqedqb1a"/></g>`,
		"fallback": "uix:roundabout-cw-exit-left",
	});
}

export default Component;
