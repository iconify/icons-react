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
		"content": `<style>.blxf-kbhe {
  fill: currentColor;
  d: path("M232 60v136a20 20 0 0 1-20 20h-40a12 12 0 0 1 0-24h36V64H48v4a12 12 0 0 1-24 0v-8a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20M36 176a12 12 0 0 0 0 24a4 4 0 0 1 4 4a12 12 0 0 0 24 0a28 28 0 0 0-28-28m0-40a12 12 0 0 0 0 24a44.05 44.05 0 0 1 44 44a12 12 0 0 0 24 0a68.07 68.07 0 0 0-68-68m0-40a12 12 0 0 0 0 24a84.09 84.09 0 0 1 84 84a12 12 0 0 0 24 0A108.12 108.12 0 0 0 36 96");
}
</style><path class="blxf-kbhe"/>`,
		"fallback": "ph:screencast-bold",
	});
}

export default Component;
