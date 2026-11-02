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
		"content": `<style>.li52xsbqi {
  fill: currentColor;
  d: path("M4 2h16a1 1 0 0 1 1 1v7c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V3a1 1 0 0 1 1-1m6.707 6.293a.999.999 0 1 0-1.414 1.414L10.586 11l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 12.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 11l1.293-1.293a.999.999 0 1 0-1.414-1.414L12 9.586Z");
}
</style><path class="li52xsbqi"/>`,
		"fallback": "coolicons:shield-close-fill-sharp",
	});
}

export default Component;
