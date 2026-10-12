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

.x7g8l4apy {
  d: path("M12 17v-5.5a4 4 0 1 1 3.46-6");
}

.y7gj8abnh {
  width: 12px;
  height: 4.25px;
  x: 6px;
  y: 17px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="x7g8l4apy"/><rect class="y7gj8abnh"/></g>`,
		"fallback": "iconoven:tow-hook",
	});
}

export default Component;
