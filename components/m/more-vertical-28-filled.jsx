import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ljj3f7ibf {
  fill: currentColor;
  d: path("M14 8.75a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5m0 8a2.75 2.75 0 1 1 0-5.5a2.75 2.75 0 0 1 0 5.5M11.25 22a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0");
}
</style><path class="ljj3f7ibf"/>`,
		"fallback": "fluent:more-vertical-28-filled",
	});
}

export default Component;
