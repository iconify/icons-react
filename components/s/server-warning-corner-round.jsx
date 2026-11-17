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
		"content": `<style>.hxyfjwb2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3m6 13H6a3 3 0 0 1 0-6h3M7 7h.01M7 17h.01M17 14v4m0 3h.01");
}
</style><path class="hxyfjwb2v"/>`,
		"fallback": "coolicons:server-warning-corner-round",
	});
}

export default Component;
