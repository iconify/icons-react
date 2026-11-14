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

.pudody9mo {
  d: path("M6.75 11.25v5.25c0 1.5 2.25 3 5.25 3s5.25-1.5 5.25-3v-5.25M21 9.5v6");
}

.rpy5h1zny {
  d: path("m5.872 8.144l5.487-2.592a1.5 1.5 0 0 1 1.282 0l5.487 2.592a1.5 1.5 0 0 1 0 2.712l-5.487 2.592a1.5 1.5 0 0 1-1.282 0l-5.487-2.592a1.5 1.5 0 0 1 0-2.712");
}
</style><g class="hntgybcog"><path class="rpy5h1zny"/><path class="pudody9mo"/></g>`,
		"fallback": "uix:pin-university",
	});
}

export default Component;
