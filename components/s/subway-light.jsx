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
		"content": `<style>.z2_-rjbnl {
  fill: currentColor;
  d: path("M222 96v112a6 6 0 0 1-12 0V96a58.07 58.07 0 0 0-58-58h-48a58.07 58.07 0 0 0-58 58v112a6 6 0 0 1-12 0V96a70.08 70.08 0 0 1 70-70h48a70.08 70.08 0 0 1 70 70m-40 0v72a22 22 0 0 1-20.33 21.93l3.7 7.39a6 6 0 0 1-10.74 5.36L148.29 190h-40.58l-6.34 12.68a6 6 0 1 1-10.74-5.36l3.7-7.39A22 22 0 0 1 74 168V96a22 22 0 0 1 22-22h64a22 22 0 0 1 22 22m-96 0v50h84V96a10 10 0 0 0-10-10H96a10 10 0 0 0-10 10m32 62v20h20v-20Zm-22 20h10v-20H86v10a10 10 0 0 0 10 10m74-10v-10h-20v20h10a10 10 0 0 0 10-10");
}
</style><path class="z2_-rjbnl"/>`,
		"fallback": "ph:subway-light",
	});
}

export default Component;
