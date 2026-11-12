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
		"content": `<style>.wyunsnugx {
  fill: currentColor;
  d: path("M6 2h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m1 4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm12 9v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0M9 17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="wyunsnugx"/>`,
		"fallback": "coolicons:stepper-fill-round",
	});
}

export default Component;
