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
		"content": `<style>.h3laydbah {
  fill: currentColor;
  d: path("M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0-5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="h3laydbah"/>`,
		"fallback": "fluent:more-circle-16-filled",
	});
}

export default Component;
