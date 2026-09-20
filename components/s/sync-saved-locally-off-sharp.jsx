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
		"content": `<style>.kp_x1zb_g {
  fill: currentColor;
  d: path("m21.192 22.608l-3.146-3.146H1.77v-1h15.272l-1-1H3V5.042h.615L1.392 2.808L2.1 2.1l19.8 19.8zM21 17.273h-.877L13.79 10.94l2.099-2.078l-.714-.714l-2.079 2.079l-5.784-5.765H21z");
}
</style><path class="kp_x1zb_g"/>`,
		"fallback": "material-symbols-light:sync-saved-locally-off-sharp",
	});
}

export default Component;
