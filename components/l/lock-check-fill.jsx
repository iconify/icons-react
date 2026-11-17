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
		"content": `<style>.v4t5g9bhe {
  fill: currentColor;
  d: path("M8 9V6a4 4 0 0 1 8 0v3h2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Zm6-3a2 2 0 1 0-4 0v3h4Zm-5.293 8.293a.999.999 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5a.999.999 0 1 0-1.414-1.414L11 16.586Z");
}
</style><path class="v4t5g9bhe"/>`,
		"fallback": "coolicons:lock-check-fill",
	});
}

export default Component;
