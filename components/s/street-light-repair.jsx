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
		"content": `<style>.bg5ytyjxp {
  d: path("M18.75 12v1.5a1 1 0 0 0 1 1h1.5m-8.75 6.25l4.25-4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.loibk5cgx {
  d: path("M6.5 21.5V7a4 4 0 0 1 4-4h2m1.904 0h4.192a1.255 1.255 0 0 1 1.154 1.75l-.36.841a1.5 1.5 0 0 1-1.379.909h-3.022a1.5 1.5 0 0 1-1.379-.909l-.36-.841A1.255 1.255 0 0 1 14.404 3M4 21.5h5m12.25-7a2.5 2.5 0 1 1-2.5-2.5");
}
</style><g class="hntgybcog"><path class="loibk5cgx"/><path class="bg5ytyjxp"/></g>`,
		"fallback": "uix:street-light-repair",
	});
}

export default Component;
