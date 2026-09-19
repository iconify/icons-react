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
		"content": `<style>.k_rucz0wp {
  fill: currentColor;
  d: path("m21 9l-6-6H3v18h18zM7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z");
}
</style><path class="k_rucz0wp"/>`,
		"fallback": "ic:sharp-text-snippet",
	});
}

export default Component;
