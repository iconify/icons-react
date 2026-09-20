import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.go6n35ofz {
  fill: currentColor;
  d: path("M244 172a32 32 0 1 1-49.38-26.85l-9-26.89l-51.46 62.81A8 8 0 0 1 128 184H73.66a32 32 0 1 1 2.08-16h48.47l55.46-67.69L162.23 48H136a8 8 0 0 1 0-16h32a8 8 0 0 1 7.59 5.47l34.21 102.61c.72-.05 1.46-.08 2.2-.08a32 32 0 0 1 32 32");
}
</style><path class="go6n35ofz"/>`,
		"fallback": "ph:scooter-fill",
	});
}

export default Component;
