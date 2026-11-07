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
		"content": `<style>.wsw0ssbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.177-1.823M10 4h9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m3.823 9.823c-.25.114-.53.177-.823.177H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h9m-7 3h.01M2 2l20 20");
}
</style><path class="wsw0ssbur"/>`,
		"fallback": "coolicons:server-off",
	});
}

export default Component;
