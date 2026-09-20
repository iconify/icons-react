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
		"content": `<style>.jm9s94b8t {
  fill: currentColor;
  d: path("M238 128a6 6 0 0 1-6 6h-28.29l-38.34 76.68A6 6 0 0 1 160 214h-.3a6 6 0 0 1-5.31-3.85L95.51 55.57l-34.05 74.91A6 6 0 0 1 56 134H24a6 6 0 0 1 0-12h28.14l38.4-84.48a6 6 0 0 1 11.07.34l59.13 155.24l33.89-67.78A6 6 0 0 1 200 122h32a6 6 0 0 1 6 6");
}
</style><path class="jm9s94b8t"/>`,
		"fallback": "ph:pulse-light",
	});
}

export default Component;
