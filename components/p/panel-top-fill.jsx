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
		"content": `<style>.csamymbpu {
  fill: currentColor;
  d: path("M21 18a3 3 0 0 1-3 3H6a3.004 3.004 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3ZM5 18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8H5Z");
}
</style><path class="csamymbpu"/>`,
		"fallback": "coolicons:panel-top-fill",
	});
}

export default Component;
