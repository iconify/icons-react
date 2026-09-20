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
		"content": `<style>.h-xomkb_s {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 168a44 44 0 0 1-38.3-65.62L123.38 68a8 8 0 0 1 13.86 8l-16.52 28.61A45 45 0 0 1 128 104a44 44 0 0 1 0 88m28-44a28 28 0 1 1-28-28a28 28 0 0 1 28 28");
}
</style><path class="h-xomkb_s"/>`,
		"fallback": "ph:number-six-fill",
	});
}

export default Component;
