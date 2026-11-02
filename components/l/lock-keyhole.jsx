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
		"content": `<style>.kk2iplqgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm7 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v3m-3-8V6a3 3 0 0 1 6 0v4");
}
</style><path class="kk2iplqgk"/>`,
		"fallback": "coolicons:lock-keyhole",
	});
}

export default Component;
