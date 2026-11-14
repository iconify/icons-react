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
		"content": `<style>.lv3ov_11r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-17 0v5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-2.5 0v-6a2.5 2.5 0 0 0-5 0v2");
}
</style><path class="lv3ov_11r"/>`,
		"fallback": "uix-sharp:kitchen-sink",
	});
}

export default Component;
