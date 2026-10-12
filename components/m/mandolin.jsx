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
		"content": `<style>.a5m4iybjz {
  width: 4px;
  height: 3.25px;
  x: 10px;
  y: 2.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.id0syub8f {
  d: path("M12 8.5c2 1.5 6.25 3.6 6.25 7.6c0 3.2-2.8 5.15-6.25 5.15S5.75 19.3 5.75 16.1c0-4 4.25-6.1 6.25-7.6m0 0V6");
}

.l888ssy_d {
  cx: 12px;
  cy: 15.75px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="id0syub8f"/><rect class="a5m4iybjz"/><circle class="l888ssy_d"/></g>`,
		"fallback": "iconoven:mandolin",
	});
}

export default Component;
