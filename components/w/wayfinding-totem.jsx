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
		"content": `<style>.bn1axxb9f {
  d: path("M9.5 7h5M13 5.5L14.5 7L13 8.5m1.5 5h-5M11 12l-1.5 1.5L11 15");
}

.gmwpzbbwt {
  d: path("M9.125 2.5h5.75A2.625 2.625 0 0 1 17.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 6.5 18.875V5.125A2.625 2.625 0 0 1 9.125 2.5M3.5 21.5h17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gmwpzbbwt"/><path class="bn1axxb9f"/></g>`,
		"fallback": "uix:wayfinding-totem",
	});
}

export default Component;
