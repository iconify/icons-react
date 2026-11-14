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
		"content": `<style>.hf87y6-xf {
  d: path("m15.548 8.095l-.695 3.939a1.5 1.5 0 0 1-1.737 1.217l-7.879-1.389a1.5 1.5 0 0 1-1.217-1.738l.695-3.939a1.5 1.5 0 0 1 1.738-1.217l7.878 1.389a1.5 1.5 0 0 1 1.217 1.738");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ujfmn8ail {
  d: path("M11.754 9.457a3.5 3.5 0 0 1 6.893 1.215m.103 4.828h.01m-3.01 3h.01m3.74 1.75h.01");
}
</style><g class="hntgybcog"><path class="hf87y6-xf"/><path class="ujfmn8ail"/></g>`,
		"fallback": "uix:sumo-salt-throw",
	});
}

export default Component;
