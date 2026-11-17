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
		"content": `<style>.reyi77aol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12h5V9h8v3h5v4h-5v3H8v-3H3zm0-2v8m18-8v8m-9-9V5M9 5h6");
}
</style><path class="reyi77aol"/>`,
		"fallback": "coolicons:valve-sharp",
	});
}

export default Component;
