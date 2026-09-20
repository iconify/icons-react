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
		"content": `<style>.gtuj59bkl {
  fill: currentColor;
  d: path("M13 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="gtuj59bkl"/>`,
		"fallback": "fluent:more-vertical-32-filled",
	});
}

export default Component;
