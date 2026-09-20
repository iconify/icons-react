import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ldspctbcu {
  fill: currentColor;
  d: path("M9.5 16a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m9 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m6.5 2.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path class="ldspctbcu"/>`,
		"fallback": "fluent:more-horizontal-32-regular",
	});
}

export default Component;
