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
		"content": `<style>.g_hkgwbti {
  fill: currentColor;
  d: path("M3 2h18a1 1 0 0 1 0 2h-1v12a1 1 0 0 1-1 1h-4.586l3.293 3.293a.999.999 0 1 1-1.414 1.414L12 17.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414L9.586 17H5a1 1 0 0 1-1-1V4H3a1 1 0 0 1 0-2m6.728 15h.654a1 1 0 0 0-.654 0m3.89 0h.654a1 1 0 0 0-.654 0");
}
</style><path class="g_hkgwbti"/>`,
		"fallback": "coolicons:presentation-fill-sharp",
	});
}

export default Component;
