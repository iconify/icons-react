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
		"content": `<style>.ccd5w4-zt {
  fill: currentColor;
  d: path("M228 112c0 23.6-8.29 45.23-23.35 60.88C190.52 187.57 171.33 196 152 196c-15.45 0-26.78-4.18-34.89-9.31l-9.43 40.06a12 12 0 1 1-23.36-5.5l32-136a12 12 0 1 1 23.36 5.5l-16.45 69.93C126.72 164.86 135.16 172 152 172c25.56 0 52-22.45 52-60a68 68 0 1 0-126.91 34a12 12 0 0 1-20.77 12A92 92 0 1 1 228 112");
}
</style><path class="ccd5w4-zt"/>`,
		"fallback": "ph:pinterest-logo-bold",
	});
}

export default Component;
