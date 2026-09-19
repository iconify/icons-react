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
		"content": `<style>.uxf0whb8e {
  fill: currentColor;
  d: path("M5 14.5h14v-6H5zM11 .55V3.5h2V.55zm8.04 2.5l-1.79 1.79l1.41 1.41l1.8-1.79zM13 22.45V19.5h-2v2.95zm7.45-3.91l-1.8-1.79l-1.41 1.41l1.79 1.8zM3.55 4.46l1.79 1.79l1.41-1.41l-1.79-1.79zm1.41 15.49l1.79-1.8l-1.41-1.41l-1.79 1.79z");
}
</style><path class="uxf0whb8e"/>`,
		"fallback": "ic:wb-iridescent",
	});
}

export default Component;
