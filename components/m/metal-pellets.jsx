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

.rs6uchb6o {
  d: path("M4 15.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.t-4yepafc {
  d: path("M8 8.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5.5 11h19");
}
</style><g class="hntgybcog"><path class="rs6uchb6o"/><path class="t-4yepafc"/></g>`,
		"fallback": "uix:metal-pellets",
	});
}

export default Component;
