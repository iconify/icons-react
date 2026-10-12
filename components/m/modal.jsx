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
		"content": `<style>.d1csye2xg {
  width: 12px;
  height: 10px;
  x: 6px;
  y: 7.5px;
  rx: 2px;
}

.fr9wc8ere {
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

.s__ukp43w {
  d: path("M6.75 10.75h10.5m-2.5-2L16 10m0-1.25L14.75 10");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><rect class="d1csye2xg"/><path class="s__ukp43w"/></g>`,
		"fallback": "iconoven:modal",
	});
}

export default Component;
