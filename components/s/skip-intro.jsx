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
		"content": `<style>.xjj7gnb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.19 5.74l7.62 5.27q1.44.99 0 1.98l-7.62 5.27q-1.44.99-1.44-.76v-11q0-1.75 1.44-.76m13.06-.99v14.5");
}
</style><path class="xjj7gnb_w"/>`,
		"fallback": "iconoven:skip-intro",
	});
}

export default Component;
