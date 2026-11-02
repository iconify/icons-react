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
		"content": `<style>.tp6t8obxz {
  fill: currentColor;
  d: path("M9.465 14h5.07A4.002 4.002 0 0 1 20 8.536A4 4 0 0 1 18 16H6a4.001 4.001 0 1 1 3.465-2");
}
</style><path class="tp6t8obxz"/>`,
		"fallback": "coolicons:voicemail-fill",
	});
}

export default Component;
