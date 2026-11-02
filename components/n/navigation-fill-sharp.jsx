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
		"content": `<style>.c1sogr1ip {
  fill: currentColor;
  d: path("M21.316 8.051a1 1 0 0 1 .131 1.843l-7.702 3.851l-3.851 7.702a1 1 0 0 1-1.843-.131l-6-18a1.001 1.001 0 0 1 1.265-1.265Z");
}
</style><path class="c1sogr1ip"/>`,
		"fallback": "coolicons:navigation-fill-sharp",
	});
}

export default Component;
