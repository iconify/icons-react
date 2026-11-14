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
		"content": `<style>.crjo_5aqy {
  d: path("m12.887 12.522l2.5 1.471a1.75 1.75 0 0 1 .863 1.508v2.498a1.75 1.75 0 0 1-.863 1.508l-2.5 1.471a1.75 1.75 0 0 1-1.774 0l-2.5-1.471a1.75 1.75 0 0 1-.863-1.508v-2.498a1.75 1.75 0 0 1 .863-1.508l2.5-1.471a1.75 1.75 0 0 1 1.774 0m-3.754-2.53a3.5 3.5 0 0 1 5.734 0");
}

.d-_jzwb5p {
  d: path("M4.218 6.551a9.5 9.5 0 0 1 15.564 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kwxrv6rmf {
  d: path("M6.676 8.272a6.5 6.5 0 0 1 10.648 0");
}
</style><g class="hntgybcog"><path class="crjo_5aqy"/><path class="kwxrv6rmf"/><path class="d-_jzwb5p"/></g>`,
		"fallback": "uix:network-6g",
	});
}

export default Component;
