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
		"content": `<style>.pwi8aib_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7V3h11v18H8v-4m4-2l3-3m0 0l-3-3m3 3H5");
}
</style><path class="pwi8aib_y"/>`,
		"fallback": "coolicons:log-in-sharp",
	});
}

export default Component;
