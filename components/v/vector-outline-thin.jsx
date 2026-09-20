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
		"content": `<style>.cqx_5fa1v {
  d: path("M3 21 20 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y18a3dbyh {
  d: path("M13 4h7v7");
}
</style><g class="hntgybcog"><path class="cqx_5fa1v"/><path class="y18a3dbyh"/></g>`,
		"fallback": "iconmind:vector-outline-thin",
	});
}

export default Component;
