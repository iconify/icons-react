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
		"content": `<style>.pvouwlbuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 11v3a4 4 0 0 1-4 4H5c-.738 0-1.369-.631-1-1l5-5c.64-.64 1.72-1 3-1zm0 0V8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3");
}
</style><path class="pvouwlbuy"/>`,
		"fallback": "coolicons:iron-round",
	});
}

export default Component;
