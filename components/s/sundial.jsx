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

.mwq69rb7q {
  d: path("M9 6.5v8h6.5Zm0 8l-2 2");
}

.nt8tkeber {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m0 0H5m16.5 0H19m-7 9.5V19");
}
</style><g class="hntgybcog"><path class="nt8tkeber"/><path class="mwq69rb7q"/></g>`,
		"fallback": "uix:sundial",
	});
}

export default Component;
