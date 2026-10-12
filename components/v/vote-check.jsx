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

.i4gdhabww {
  width: 2.5px;
  height: 2.5px;
  x: 7.75px;
  y: 6px;
  rx: 0.5px;
}

.nekm0m-9h {
  d: path("M12.75 12.25h3.5m-3.5 5h3.5m-8.75-10l1.75 2l5.5-6");
}

.s-8gf6aez {
  width: 2.5px;
  height: 2.5px;
  x: 7.75px;
  y: 16px;
  rx: 0.5px;
}

.wapa28bcl {
  width: 2.5px;
  height: 2.5px;
  x: 7.75px;
  y: 11px;
  rx: 0.5px;
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><rect class="i4gdhabww"/><rect class="wapa28bcl"/><rect class="s-8gf6aez"/><path class="nekm0m-9h"/></g>`,
		"fallback": "iconoven:vote-check",
	});
}

export default Component;
