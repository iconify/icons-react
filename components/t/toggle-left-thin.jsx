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
		"content": `<style>.rwrz6sdxt {
  fill: currentColor;
  d: path("M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136m0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120M80 92a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="rwrz6sdxt"/>`,
		"fallback": "ph:toggle-left-thin",
	});
}

export default Component;
