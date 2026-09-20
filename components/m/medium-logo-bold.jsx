import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gn9tsbcew {
  fill: currentColor;
  d: path("M68 60a68 68 0 1 0 68 68a68.07 68.07 0 0 0-68-68m0 112a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44M184 60c-23.63 0-36 34.21-36 68s12.37 68 36 68s36-34.21 36-68s-12.37-68-36-68m0 111.87c-3.74-2.16-12-17.09-12-43.87s8.26-41.71 12-43.87c3.74 2.16 12 17.09 12 43.87s-8.26 41.71-12 43.87M256 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0");
}
</style><path class="gn9tsbcew"/>`,
		"fallback": "ph:medium-logo-bold",
	});
}

export default Component;
