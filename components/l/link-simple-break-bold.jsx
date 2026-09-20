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
		"content": `<style>.lqm6xzb9n {
  fill: currentColor;
  d: path("m218.45 122.43l-30.08 30.06a12 12 0 0 1-17-17l30.08-30.07a36 36 0 0 0-50.93-50.92l-30.04 30.09a12 12 0 0 1-17-17l30.07-30.06a60 60 0 0 1 84.87 84.88Zm-82.93 49l-30.07 30.08a36 36 0 0 1-50.92-50.93l30.06-30.07a12 12 0 0 0-17-17l-30.04 30.07a60 60 0 0 0 84.88 84.87l30.06-30.07a12 12 0 0 0-17-17Z");
}
</style><path class="lqm6xzb9n"/>`,
		"fallback": "ph:link-simple-break-bold",
	});
}

export default Component;
