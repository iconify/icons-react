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

.hup1ljbhq {
  d: path("m7.75 7.25l1 1l1.75-2m-2.75 6l1 1l1.75-2m-2.75 6l1 1l1.75-2m2.25-9h3.5m-3.5 5h3.5m-3.5 5h3.5");
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="hup1ljbhq"/></g>`,
		"fallback": "iconoven:terms-agreement",
	});
}

export default Component;
