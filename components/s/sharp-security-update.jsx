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
		"content": `<style>.c50kwtbiw {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z");
}
</style><path class="c50kwtbiw"/>`,
		"fallback": "ic:sharp-security-update",
	});
}

export default Component;
