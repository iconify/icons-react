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
		"content": `<style>.d7q6acc7v {
  d: path("M20.25 13.25v-9.5h-6l-.782.001l-.188.759L12 10H7v3.25Z");
}

.k4xnl580k {
  cx: 16.75px;
  cy: 17.25px;
  r: 4px;
}

.rxv4v_j2s {
  d: path("M17.75 3.75V10H13m-3 0V6.75M7.5 9.5l-3 3.25m-1.75 0h3.5v3.75h-3.5Z");
}

.v66ayjblm {
  cx: 9px;
  cy: 19px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="d7q6acc7v"/><path class="rxv4v_j2s"/><circle class="k4xnl580k"/><circle class="v66ayjblm"/></g>`,
		"fallback": "iconoven:tractor-farm-sharp",
	});
}

export default Component;
