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
		"content": `<style>.y5pyccc_g {
  fill: currentColor;
  d: path("M15 3h2v7h-2zm4 0h2v7h-2zm-5.79 14.37a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61z");
}
</style><path class="y5pyccc_g"/>`,
		"fallback": "ic:sharp-phone-paused",
	});
}

export default Component;
