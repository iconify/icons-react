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
		"content": `<style>.al90kibfd {
  width: 5px;
  height: 5px;
  x: 7px;
  y: 6.25px;
  rx: 1px;
}

.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sb67racrv {
  d: path("M15 7.25h2m-2 3h2m-10 4.5h10M7 18h6");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><rect class="al90kibfd"/><path class="sb67racrv"/></g>`,
		"fallback": "iconoven:layout-article",
	});
}

export default Component;
