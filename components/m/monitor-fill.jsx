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
		"content": `<style>.gc0j-96xn {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm12 13a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="gc0j-96xn"/>`,
		"fallback": "coolicons:monitor-fill",
	});
}

export default Component;
