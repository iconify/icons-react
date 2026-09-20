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
		"content": `<style>.ubgnq-bgo {
  fill: currentColor;
  d: path("M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M72 140a4 4 0 0 0 2.83-6.83L37.66 96l37.17-37.17a4 4 0 0 0-5.66-5.66l-40 40a4 4 0 0 0 0 5.66l40 40A4 4 0 0 0 72 140");
}
</style><path class="ubgnq-bgo"/>`,
		"fallback": "ph:text-outdent-thin",
	});
}

export default Component;
