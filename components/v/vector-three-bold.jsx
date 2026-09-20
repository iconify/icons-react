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
		"content": `<style>.z52544mky {
  fill: currentColor;
  d: path("m240.49 144.49l-32 32a12 12 0 0 1-17-17L203 148h-78l-48 48h19a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l48-48V53L96.49 64.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L132 53v71h71l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17");
}
</style><path class="z52544mky"/>`,
		"fallback": "ph:vector-three-bold",
	});
}

export default Component;
