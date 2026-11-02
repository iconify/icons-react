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
		"content": `<style>.mwifcgbsb {
  fill: currentColor;
  d: path("M12 3h6a1 1 0 0 1 0 2h-5v15a1 1 0 0 1-2 0V5H6a1 1 0 0 1 0-2Z");
}
</style><path class="mwifcgbsb"/>`,
		"fallback": "coolicons:letter-t-fill",
	});
}

export default Component;
