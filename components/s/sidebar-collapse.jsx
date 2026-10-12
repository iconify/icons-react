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
		"content": `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o96f09bsr {
  d: path("M9.25 4.5v15M5.5 7.5H7m-1.5 3H7");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="o96f09bsr"/></g>`,
		"fallback": "iconoven:sidebar-collapse",
	});
}

export default Component;
