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

.pf_i7yikg {
  width: 6px;
  height: 10.5px;
  x: 5px;
  y: 2.75px;
  rx: 3px;
}

.rhlfdw6xa {
  d: path("M2.75 10.75a5.25 5.25 0 0 0 10.5 0M8 16v4.5M15.75 8h5.5m-5.5 4.25h5.5m-5.5 4.25h3.5");
}
</style><g class="hntgybcog"><rect class="pf_i7yikg"/><path class="rhlfdw6xa"/></g>`,
		"fallback": "iconoven:speech-to-text",
	});
}

export default Component;
