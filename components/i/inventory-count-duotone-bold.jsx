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
		"content": `<style>.ih_hzbmoj {
  d: path("M4 20v-8h16v8Zm8 -8v8m-4 -8V4h8v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.td9f6wbon {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20v-8h16v8Zm8 -8v8m-4 -8V4h8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="td9f6wbon"/><path class="ih_hzbmoj"/></g>`,
		"fallback": "iconmind:inventory-count-duotone-bold",
	});
}

export default Component;
