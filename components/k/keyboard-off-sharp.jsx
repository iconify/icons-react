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
		"content": `<style>.p_sbfbcbu {
  fill: currentColor;
  d: path("M19.85 22.525L1.475 4.15L2.9 2.725L21.275 21.1zM8 16h8.175l-2-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm9 0h2v-2h-2zM5 10h2V8H5zm9 0h2V8h-2zm3 0h2V8h-2zM2 19V5h3.175l14 14zm20 .025l-6-6.05V11h-2l-1-1.025V8h-1.975l-3-3H22z");
}
</style><path class="p_sbfbcbu"/>`,
		"fallback": "material-symbols:keyboard-off-sharp",
	});
}

export default Component;
