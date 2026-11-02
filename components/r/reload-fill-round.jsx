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
		"content": `<style>.jayktdbvu {
  fill: currentColor;
  d: path("M5.001 10H5a.997.997 0 0 1-1-1V3a1 1 0 0 1 2 0v2.817a8.615 8.615 0 0 1 13.919 2.789a.999.999 0 1 1-1.838.788A6.615 6.615 0 0 0 6.729 8H11a1 1 0 0 1 0 2Zm12.27 6H13a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-2.817a8.615 8.615 0 0 1-13.919-2.789a.999.999 0 1 1 1.838-.788A6.614 6.614 0 0 0 17.271 16");
}
</style><path class="jayktdbvu"/>`,
		"fallback": "coolicons:reload-fill-round",
	});
}

export default Component;
