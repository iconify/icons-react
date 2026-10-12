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

.k7dc-rklw {
  width: 14.5px;
  height: 8.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 3px;
}

.o09g9gxap {
  d: path("M4.75 7h14.5m-12.5 4v10.25M17.25 11v10.25M6.75 17h3.5m3.5 0h3.5M12 11.25v10");
}
</style><g class="hntgybcog"><rect class="k7dc-rklw"/><path class="o09g9gxap"/></g>`,
		"fallback": "iconoven:water-tower",
	});
}

export default Component;
