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
		"content": `<style>.bcazfxb5p {
  d: path("M7.5 8a4.5 3 0 0 1 9 0ZM9 11.5v2m3-2v2m3-2v2m-4.5 3v2m3-2v2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tn_w17bje {
  d: path("M4 21.5v-17a2 2 0 0 1 2-2h6V5");
}
</style><g class="hntgybcog"><path class="tn_w17bje"/><path class="bcazfxb5p"/></g>`,
		"fallback": "uix:walk-in-shower",
	});
}

export default Component;
