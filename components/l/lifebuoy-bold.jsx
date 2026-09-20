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
		"content": `<style>.f3w1oub1u {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m44.25 135.28a51.89 51.89 0 0 0 0-54.56l23-23a83.84 83.84 0 0 1 0 100.56ZM100 128a28 28 0 1 1 28 28a28 28 0 0 1-28-28m78.28-67.25l-23 23a51.89 51.89 0 0 0-54.56 0l-23-23a83.84 83.84 0 0 1 100.56 0m-117.53 17l23 23a51.89 51.89 0 0 0 0 54.56l-23 23a83.84 83.84 0 0 1 0-100.56m17 117.53l23-23a51.89 51.89 0 0 0 54.56 0l23 23a83.84 83.84 0 0 1-100.56 0");
}
</style><path class="f3w1oub1u"/>`,
		"fallback": "ph:lifebuoy-bold",
	});
}

export default Component;
