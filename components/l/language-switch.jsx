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

.l6ep-qvao {
  d: path("m3 11l3-7l3 7M4.25 8.5h3.5M15 13h6m-3 0v8m-2.5-4h5m-9-12.5H16a2 2 0 0 1 2 2V9");
}

.pmo02cy9m {
  d: path("m16 7.5l2 2l2-2m-7.5 12H8a2 2 0 0 1-2-2V15");
}

.pz92bfbaf {
  d: path("m4 16.5l2-2l2 2");
}
</style><g class="hntgybcog"><path class="l6ep-qvao"/><path class="pmo02cy9m"/><path class="pz92bfbaf"/></g>`,
		"fallback": "uix:language-switch",
	});
}

export default Component;
