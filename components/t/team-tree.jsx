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
		"content": `<style>.elds3ilxm {
  d: path("M12 7.75V12m0 0l-4.59 4.59M12 12l4.59 4.59");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nmoouyb9r {
  cx: 18px;
  cy: 18px;
  r: 2px;
}

.sa8oq8bea {
  cx: 6px;
  cy: 18px;
  r: 2px;
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="wv5f_1brg"/><path class="elds3ilxm"/><circle class="sa8oq8bea"/><circle class="nmoouyb9r"/></g>`,
		"fallback": "iconoven:team-tree",
	});
}

export default Component;
