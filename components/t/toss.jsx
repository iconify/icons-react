import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qj49azb3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.985 14.452c9.346-1.98 17.356 1.106 17.356 8.46c0 9.389-14.05 19.303-23.57 19.303L27.91 5.84c-9.52 0-23.57 9.914-23.57 19.303c0 7.354 8.01 10.44 17.357 8.46");
}
</style><path class="qj49azb3v"/>`,
		"fallback": "arcticons:toss",
	});
}

export default Component;
