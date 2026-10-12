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

.i458yzfua {
  width: 4.5px;
  height: 3px;
  x: 9.75px;
  y: 11.75px;
  rx: 0.75px;
}

.rudkbjbsr {
  d: path("m8.5 3.25l-3.75 2.5v13.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2V5.75l-3.75-2.5L12 8.5ZM12 8.5v3m0 4.5v5.25m-7.25-8h5m4.5 0h5");
}
</style><g class="hntgybcog"><path class="rudkbjbsr"/><rect class="i458yzfua"/></g>`,
		"fallback": "iconoven:life-jacket",
	});
}

export default Component;
