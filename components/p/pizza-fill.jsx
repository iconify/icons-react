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
		"content": `<style>.hgh1mpe_c {
  fill: currentColor;
  d: path("M239.54 63a15.9 15.9 0 0 0-7.25-9.9a201.49 201.49 0 0 0-208.58 0a16 16 0 0 0-5.37 22l96 157.27a16 16 0 0 0 27.36 0l96-157.27a15.82 15.82 0 0 0 1.84-12.1m-55.1 68.53a40 40 0 0 0-41.38 67.77L128 224l-31.5-51.57a40 40 0 1 0-41.35-67.76L48.8 94.26a152 152 0 0 1 158.39 0Z");
}
</style><path class="hgh1mpe_c"/>`,
		"fallback": "ph:pizza-fill",
	});
}

export default Component;
