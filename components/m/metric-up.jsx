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
		"content": `<style>.erio2v7qq {
  width: 4px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  rx: 1px;
}

.gfq8zhbzg {
  d: path("M18 21.25V4.5m-3.25 3L18 4.25l3.25 3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uncvak0dc {
  width: 4px;
  height: 12px;
  x: 9px;
  y: 9.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="erio2v7qq"/><rect class="uncvak0dc"/><path class="gfq8zhbzg"/></g>`,
		"fallback": "iconoven:metric-up",
	});
}

export default Component;
