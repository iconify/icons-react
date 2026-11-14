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
		"content": `<style>.lqiqm6f2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M5 3.5v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3m-7 3h.01m-3.51 9L11 18l4.5-4.5");
}
</style><path class="lqiqm6f2s"/>`,
		"fallback": "uix-sharp:smoke-alarm-test",
	});
}

export default Component;
