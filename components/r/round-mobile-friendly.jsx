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
		"content": `<style>.sf0vxbcot {
  fill: currentColor;
  d: path("M19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-1.92-1.92c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l2.47 2.47c.39.39 1.02.39 1.41 0l5.85-5.85c.35-.35.35-.92 0-1.27s-.92-.35-1.27 0z");
}
</style><path class="sf0vxbcot"/>`,
		"fallback": "ic:round-mobile-friendly",
	});
}

export default Component;
