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
		"content": `<style>.bw-p_jbtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20v-8h16v8Zm8 -8v8m-4 -8V4h8v8");
}
</style><path class="bw-p_jbtt"/>`,
		"fallback": "iconmind:inventory-count-outline-thin",
	});
}

export default Component;
