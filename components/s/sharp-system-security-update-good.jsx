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
		"content": `<style>.k25incbyk {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 17H7V6h10zm-1-7.95l-1.41-1.41l-3.54 3.54l-1.41-1.41l-1.41 1.41L11.05 15z");
}
</style><path class="k25incbyk"/>`,
		"fallback": "ic:sharp-system-security-update-good",
	});
}

export default Component;
