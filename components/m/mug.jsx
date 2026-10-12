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
		"content": `<style>.b-v_5_bcl {
  width: 12.5px;
  height: 16.5px;
  x: 3.75px;
  y: 4.75px;
  rx: 2.5px;
}

.f4jjwhbfu {
  d: path("M16.25 8.75h1.5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1.5M10 16l-2.1-2.1a1.3 1.3 0 0 1 2.1-1.6a1.3 1.3 0 0 1 2.1 1.6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="b-v_5_bcl"/><path class="f4jjwhbfu"/></g>`,
		"fallback": "iconoven:mug",
	});
}

export default Component;
