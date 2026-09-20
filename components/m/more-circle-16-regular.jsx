import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iaymc3bsb {
  fill: currentColor;
  d: path("M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8m5-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="iaymc3bsb"/>`,
		"fallback": "fluent:more-circle-16-regular",
	});
}

export default Component;
