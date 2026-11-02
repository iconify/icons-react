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
		"content": `<style>.bj5ec_vnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10H6a3 3 0 0 1-3-3c0-1.085.138-2.473 1-3m6 0h8a3 3 0 0 1 0 6h-2m4 10c-.455.278-1.428 0-2 0H6a3 3 0 0 1 0-6h8m-7 3h.01M2 2l20 20");
}
</style><path class="bj5ec_vnd"/>`,
		"fallback": "coolicons:server-off-round",
	});
}

export default Component;
