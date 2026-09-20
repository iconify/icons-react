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
		"content": `<style>.n76qvlmip {
  fill: currentColor;
  d: path("M20 120v48a4 4 0 0 1-8 0v-48a4 4 0 0 1 8 0m28-28a4 4 0 0 0-4 4v96a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4m32-8a4 4 0 0 0-4 4v104a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4m32-32a4 4 0 0 0-4 4v136a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4m107.27 57.46A76 76 0 0 0 144 44a4 4 0 0 0 0 8a67.75 67.75 0 0 1 67.66 61.13a4 4 0 0 0 3.22 3.53A36 36 0 0 1 208 188h-64a4 4 0 0 0 0 8h64a44 44 0 0 0 11.27-86.54");
}
</style><path class="n76qvlmip"/>`,
		"fallback": "ph:soundcloud-logo-thin",
	});
}

export default Component;
