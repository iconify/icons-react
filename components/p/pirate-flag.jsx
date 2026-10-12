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

.mpukzrsxu {
  d: path("M13.75 5.25a2.1 2.1 0 0 0-2.1 2.1c0 .8.45 1.3 1 1.6v.8h2.2v-.8c.55-.3 1-.8 1-1.6a2.1 2.1 0 0 0-2.1-2.1m-3 6l6 2m0-2l-6 2m-6.5-10.5v18.5");
}

.vioq-wlaq {
  width: 14.5px;
  height: 13px;
  x: 6.75px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="vioq-wlaq"/><path class="mpukzrsxu"/></g>`,
		"fallback": "iconoven:pirate-flag",
	});
}

export default Component;
