import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uqbie6beg {
  fill: currentColor;
  d: path("M5 4v3h5.5v12h3V7H19V4z");
}
</style><path class="uqbie6beg"/>`,
		"fallback": "ic:outline-title",
	});
}

export default Component;
