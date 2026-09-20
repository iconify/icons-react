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
		"content": `<style>.z65ja9wad {
  fill: currentColor;
  d: path("M42 104a6 6 0 0 1 3.93-5.63l152-56a6 6 0 1 1 4.15 11.26L65.36 104l136.71 50.37A6 6 0 0 1 200 166a6.1 6.1 0 0 1-2.08-.37l-152-56A6 6 0 0 1 42 104m158 90H48a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12");
}
</style><path class="z65ja9wad"/>`,
		"fallback": "ph:less-than-or-equal-light",
	});
}

export default Component;
