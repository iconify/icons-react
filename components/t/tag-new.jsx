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

.oido4ac8m {
  d: path("M4.25 5h9.987a1.75 1.75 0 0 1 1.282.559l4.875 5.25a1.75 1.75 0 0 1 0 2.382l-4.875 5.25a1.75 1.75 0 0 1-1.282.559H4.25a1.75 1.75 0 0 1-1.75-1.75V6.75A1.75 1.75 0 0 1 4.25 5M16 12h.01");
}

.qifilrr3z {
  d: path("M6 15.5v-7l5 7v-7");
}
</style><g class="hntgybcog"><path class="oido4ac8m"/><path class="qifilrr3z"/></g>`,
		"fallback": "uix:tag-new",
	});
}

export default Component;
