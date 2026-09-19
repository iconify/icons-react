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
		"content": `<style>.k5eobbybr {
  fill: currentColor;
  d: path("m15.73 14.85l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51zM18 9h-2.59l5.02-5.02l-1.41-1.41L14 7.59V5h-2v6h6z");
}
</style><path class="k5eobbybr"/>`,
		"fallback": "ic:sharp-phone-callback",
	});
}

export default Component;
