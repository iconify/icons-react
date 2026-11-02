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
		"content": `<style>.y286xab7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10H5a2 2 0 0 1-2-2V6c0-.811.306-1.686 1-2m6 0h9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3m4 10c-.251.114-.707 0-1 0H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h9m-7 3h.01M2 2l20 20");
}
</style><path class="y286xab7d"/>`,
		"fallback": "coolicons:server-off",
	});
}

export default Component;
