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
		"content": `<style>.x1zt5_vgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.647 15.647A4 4 0 0 1 11 18H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 2.354-3.646M11 6a4 4 0 0 1 4 4m0 0l2-1c1.838-.919 4 .162 4 2v2c0 .828-.44 1.503-1.09 1.91M2 3l19 19");
}
</style><path class="x1zt5_vgi"/>`,
		"fallback": "coolicons:video-off-round",
	});
}

export default Component;
