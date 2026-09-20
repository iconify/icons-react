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
		"content": `<style>.j4u34nyhv {
  fill: currentColor;
  d: path("M8 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="j4u34nyhv"/>`,
		"fallback": "fluent:more-vertical-16-regular",
	});
}

export default Component;
