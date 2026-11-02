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
		"content": `<style>.c6hm1qwau {
  fill: currentColor;
  d: path("M16 10a2 2 0 1 1 3.999-.001A2 2 0 0 1 16 10m-6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 12m-6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 4 14");
}
</style><path class="c6hm1qwau"/>`,
		"fallback": "coolicons:loading-fill",
	});
}

export default Component;
