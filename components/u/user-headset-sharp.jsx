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
		"content": `<style>.hyhsxno6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 10a4 4 0 1 0 8 0a4 4 0 0 0-8 0M4 21c0-2.21 3.582-4 8-4s8 1.79 8 4M5 10a7 7 0 0 1 14 0M5 10H3v4h2zm14 0h2v4h-2zm1 4v1h-2");
}
</style><path class="hyhsxno6b"/>`,
		"fallback": "coolicons:user-headset-sharp",
	});
}

export default Component;
