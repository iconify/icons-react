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
		"content": `<style>.fmed4ibmb {
  fill: currentColor;
  d: path("M7.75 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m6 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M18 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5");
}
</style><path class="fmed4ibmb"/>`,
		"fallback": "fluent:more-horizontal-24-regular",
	});
}

export default Component;
