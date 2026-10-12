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
		"content": `<style>.fs6q0ub2y {
  d: path("M12 8.5v7M5.75 10h3.5m-3.5 3h3.5m5.25 2.5h3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7am3v5fe {
  width: 3.25px;
  height: 3.75px;
  x: 15px;
  y: 8px;
  rx: 0.75px;
}

.q0_gb6qzx {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="q0_gb6qzx"/><path class="fs6q0ub2y"/><rect class="j7am3v5fe"/></g>`,
		"fallback": "iconoven:postcard",
	});
}

export default Component;
