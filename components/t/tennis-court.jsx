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
		"content": `<style>.aq821x4ia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 5h12.75A2.625 2.625 0 0 1 21 7.625v8.75A2.625 2.625 0 0 1 18.375 19H5.625A2.625 2.625 0 0 1 3 16.375v-8.75A2.625 2.625 0 0 1 5.625 5M12 5v14m-9-7h18M7 8.5v7m10-7v7");
}
</style><path class="aq821x4ia"/>`,
		"fallback": "uix:tennis-court",
	});
}

export default Component;
