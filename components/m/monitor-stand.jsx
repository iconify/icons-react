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

.o3osnub4j {
  width: 14.5px;
  height: 9.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 1.5px;
}

.pd3givbdd {
  d: path("M12 12.25v2.5m-8.25 6.5v-6.5h16.5v6.5");
}
</style><g class="hntgybcog"><rect class="o3osnub4j"/><path class="pd3givbdd"/></g>`,
		"fallback": "iconoven:monitor-stand",
	});
}

export default Component;
