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
		"content": `<style>.frx-4mt8o {
  d: path("M12 2.75a7.5 7.5 0 0 1 7.5 7.5c0 6.05-7.5 11-7.5 11s-7.5-4.95-7.5-11a7.5 7.5 0 0 1 7.5-7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ox16jp7cs {
  d: path("M12 7.25V9");
}

.qi7kz6b9y {
  width: 6px;
  height: 5.5px;
  x: 9px;
  y: 7.25px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="frx-4mt8o"/><rect class="qi7kz6b9y"/><path class="ox16jp7cs"/></g>`,
		"fallback": "iconoven:pickup-point",
	});
}

export default Component;
