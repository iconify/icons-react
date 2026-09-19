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
		"content": `<style>.rzckwb-ds {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 3v18h20V3zm8 14H5v-2h5zm0-4H5v-2h5zm0-4H5V7h5zm4.82 6L12 12.16l1.41-1.41l1.41 1.42L17.99 9l1.42 1.42z");
}
</style><path class="rzckwb-ds"/>`,
		"fallback": "ic:sharp-fact-check",
	});
}

export default Component;
