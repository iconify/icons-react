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
		"content": `<style>.m1rvn5bri {
  fill: currentColor;
  d: path("m12 17.152l5.064-13.503a1 1 0 1 1 1.872.702l-6 16a1 1 0 0 1-1.872 0l-6-16a1 1 0 1 1 1.872-.702Z");
}
</style><path class="m1rvn5bri"/>`,
		"fallback": "coolicons:letter-v-bulk",
	});
}

export default Component;
