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
		"content": `<style>.vqy0mmg5g {
  fill: currentColor;
  d: path("M7.707 3.707a11.68 11.68 0 0 0 0 16.586a1 1 0 1 1-1.414 1.414a13.7 13.7 0 0 1-3.031-4.548A13.66 13.66 0 0 1 6.293 2.293a1.002 1.002 0 0 1 1.414 1.414m10-1.414a13.66 13.66 0 0 1 3.031 14.866a13.7 13.7 0 0 1-3.031 4.548a.999.999 0 1 1-1.414-1.414a11.7 11.7 0 0 0 2.594-3.89c.573-1.397.866-2.893.863-4.403a11.7 11.7 0 0 0-3.457-8.293a.999.999 0 1 1 1.414-1.414M14.768 6.64L11.135 11H15a1 1 0 0 1 .768 1.64l-5 6a1 1 0 1 1-1.536-1.28L12.865 13H9a1 1 0 0 1-.768-1.64l5-6a1 1 0 1 1 1.536 1.28");
}
</style><path class="vqy0mmg5g"/>`,
		"fallback": "coolicons:serverless-fill-sharp",
	});
}

export default Component;
