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
		"content": `<style>.j1a25-fid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 21H4V9h4m6 0h6v6M9.172 4.172A4 4 0 0 1 16 7v2M2 3l19 19");
}
</style><path class="j1a25-fid"/>`,
		"fallback": "coolicons:lock-off-sharp",
	});
}

export default Component;
