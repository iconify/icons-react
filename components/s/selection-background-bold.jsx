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
		"content": `<style>.ghu2zlbhj {
  fill: currentColor;
  d: path("M156 80H48a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h108a20 20 0 0 0 20-20V100a20 20 0 0 0-20-20m-4 124H52V104h100ZM132 40a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24h-16a12 12 0 0 1-12-12m96 8v8a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h8a20 20 0 0 1 20 20m0 48v16a12 12 0 0 1-24 0V96a12 12 0 0 1 24 0m0 56v8a20 20 0 0 1-20 20h-8a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0M76 56v-8a20 20 0 0 1 20-20h8a12 12 0 0 1 0 24h-4v4a12 12 0 0 1-24 0");
}
</style><path class="ghu2zlbhj"/>`,
		"fallback": "ph:selection-background-bold",
	});
}

export default Component;
