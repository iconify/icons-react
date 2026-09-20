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
		"content": `<style>.oia2scjpx {
  fill: currentColor;
  d: path("m250 121.34l-45.64-68.43A20 20 0 0 0 187.72 44H32a12 12 0 0 0-10 18.66L65.58 128L22 193.34A12 12 0 0 0 32 212h155.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H54.42L90 134.66a12 12 0 0 0 0-13.32L54.42 68h131.16l40 60Z");
}
</style><path class="oia2scjpx"/>`,
		"fallback": "ph:tag-chevron-bold",
	});
}

export default Component;
