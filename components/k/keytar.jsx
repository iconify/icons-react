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
		"content": `<style>.cu0kclnsr {
  width: 13px;
  height: 8.5px;
  x: 2.75px;
  y: 9.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nd61oubvj {
  d: path("M6 13v4.75M9.25 13v4.75M12.5 13v4.75m3.25-6.25l5.5-5.5");
}
</style><g class="hntgybcog"><rect class="cu0kclnsr"/><path class="nd61oubvj"/></g>`,
		"fallback": "iconoven:keytar",
	});
}

export default Component;
