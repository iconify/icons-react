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
		"content": `<style>.em5b05bqu {
  width: 4.5px;
  height: 2.5px;
  x: 9.75px;
  y: 6.25px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kb576ob0p {
  width: 11.5px;
  height: 9.5px;
  x: 6.25px;
  y: 11.75px;
  rx: 3px;
}

.t0seeyjur {
  d: path("M7 3.5h7.5m-2.5 0v2.75");
}

.xcjc1dbfr {
  d: path("M9.5 16.5h5");
}
</style><g class="hntgybcog"><path class="t0seeyjur"/><rect class="em5b05bqu"/><rect class="kb576ob0p"/><path class="xcjc1dbfr"/></g>`,
		"fallback": "iconoven:shampoo-bottle",
	});
}

export default Component;
