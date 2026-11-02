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
		"content": `<style>.uyaubwshj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 16c-.628 1.388-2.378 2-4 2H7a4 4 0 0 1-4-4v-4c0-1.622.612-3.372 2-4m6 0a4 4 0 0 1 4 4m0 0l2-1c1.838-.919 4 .162 4 2v2c0 .828-.35 1.593-1 2M2 3l19 19");
}
</style><path class="uyaubwshj"/>`,
		"fallback": "coolicons:video-off-round",
	});
}

export default Component;
