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
		"content": `<style>.aq-kx-fco {
  d: path("M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5M7.25 13.5h5.5m-1.5 3.25h5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksiibsbdf {
  width: 16.5px;
  height: 15px;
  x: 3.75px;
  y: 5.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="ksiibsbdf"/><path class="aq-kx-fco"/></g>`,
		"fallback": "iconoven:shift-rota",
	});
}

export default Component;
