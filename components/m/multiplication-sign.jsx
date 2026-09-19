import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.segp53btz {
  fill: currentColor;
  d: path("M62 10.571L53.428 2L32 23.429L10.571 2L2 10.571L23.428 32L2 53.429L10.571 62L32 40.571L53.428 62L62 53.429L40.57 32z");
}
</style><path class="segp53btz"/>`,
		"fallback": "emojione-monotone:multiplication-sign",
	});
}

export default Component;
