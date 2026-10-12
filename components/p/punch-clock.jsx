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
		"content": `<style>.ayy_70qmh {
  width: 16.5px;
  height: 14px;
  x: 3.75px;
  y: 7.25px;
  rx: 2.5px;
}

.b74zm83sz {
  d: path("M9.5 7.25v-3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.5Zm-2 2.25h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8y93bcan {
  d: path("M12 13.75v1.5l1.25 1");
}

.rh1oi0w6a {
  cx: 12px;
  cy: 15.25px;
  r: 3.25px;
}
</style><g class="hntgybcog"><rect class="ayy_70qmh"/><path class="b74zm83sz"/><circle class="rh1oi0w6a"/><path class="k8y93bcan"/></g>`,
		"fallback": "iconoven:punch-clock",
	});
}

export default Component;
