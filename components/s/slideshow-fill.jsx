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
		"content": `<style>.v0708db4w {
  fill: currentColor;
  d: path("M208 64v128a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m24-16a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8M24 48a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8");
}
</style><path class="v0708db4w"/>`,
		"fallback": "ph:slideshow-fill",
	});
}

export default Component;
