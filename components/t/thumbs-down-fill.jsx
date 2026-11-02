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
		"content": `<style>.h_myy07pe {
  fill: currentColor;
  d: path("M6 2.171V15H5a3 3 0 0 1-3-3V5a3 3 0 0 1 4-2.829m2 0A3 3 0 0 1 9 2h8c.601 0 1.205.111 1.746.382c.543.271 1.007.716 1.203 1.302l2 6A1 1 0 0 1 22 10v2a3 3 0 0 1-3 3h-2a.997.997 0 0 0-1 1v3a3 3 0 1 1-6 0v-1c0-1.27-.804-2.405-2-2.83Z");
}
</style><path class="h_myy07pe"/>`,
		"fallback": "coolicons:thumbs-down-fill",
	});
}

export default Component;
