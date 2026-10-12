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
		"content": `<style>.ccjwumoiu {
  d: path("M16.5 2.75h3.25a1.5 1.5 0 0 1 1.5 1.5V7.5m-18.5 9v3.25a1.5 1.5 0 0 0 1.5 1.5H7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rbx896b-y {
  width: 8px;
  height: 8px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="hntgybcog"><rect class="rbx896b-y"/><circle class="ygphxfbhc"/><path class="ccjwumoiu"/></g>`,
		"fallback": "iconoven:ungroup",
	});
}

export default Component;
