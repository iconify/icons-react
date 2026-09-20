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
		"content": `<style>.y0j6w5h9k {
  fill: currentColor;
  d: path("M252 136a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-56.94 61.43a4 4 0 0 1-6.12 5.14C168 177.7 139.3 164 108 164s-60 13.7-80.94 38.57a4 4 0 1 1-6.12-5.14c16.71-19.9 38.13-33.13 61.89-38.59a64 64 0 1 1 50.34 0c23.76 5.46 45.18 18.69 61.89 38.59M108 156a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56");
}
</style><path class="y0j6w5h9k"/>`,
		"fallback": "ph:user-minus-thin",
	});
}

export default Component;
