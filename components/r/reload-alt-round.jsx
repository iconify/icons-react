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
		"content": `<style>.j2xzm_b_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9a7.616 7.616 0 0 1 14 0m-6 0h6V3m0 12a7.616 7.616 0 0 1-14 0m6 0H5v6");
}
</style><path class="j2xzm_b_n"/>`,
		"fallback": "coolicons:reload-alt-round",
	});
}

export default Component;
