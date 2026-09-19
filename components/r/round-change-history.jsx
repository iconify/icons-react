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
		"content": `<style>.nzdi6ob5w {
  fill: currentColor;
  d: path("M12 7.77L18.39 18H5.61zm-.85-2.41l-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0");
}
</style><path class="nzdi6ob5w"/>`,
		"fallback": "ic:round-change-history",
	});
}

export default Component;
