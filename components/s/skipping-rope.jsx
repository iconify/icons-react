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
		"content": `<style>.co_e7-ban {
  width: 3px;
  height: 7.5px;
  x: 3.5px;
  y: 2.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2gjw_3jv {
  d: path("M5 10.25v3a7 7 0 0 0 14 0v-3");
}

.u3mf-ix_k {
  width: 3px;
  height: 7.5px;
  x: 17.5px;
  y: 2.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="co_e7-ban"/><rect class="u3mf-ix_k"/><path class="j2gjw_3jv"/></g>`,
		"fallback": "iconoven:skipping-rope",
	});
}

export default Component;
