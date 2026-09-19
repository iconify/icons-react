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
		"content": `<style>.l3f9bgb1s {
  fill: currentColor;
  d: path("m18 11l5-5l-5-5v3h-4v4h4zm-4.79 6.37a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61z");
}
</style><path class="l3f9bgb1s"/>`,
		"fallback": "ic:sharp-phone-forwarded",
	});
}

export default Component;
