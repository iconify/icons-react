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
		"content": `<style>.n_1jkub7n {
  fill: currentColor;
  d: path("M18 21.901V18a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v3.901A5.01 5.01 0 0 1 2 17V7a5 5 0 0 1 5-5h8c1.317 0 2.748.335 3.707 1.293l2 2C21.665 6.252 22 7.683 22 9v8a5.01 5.01 0 0 1-4 4.901M11 9.586L9.707 8.293a.999.999 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a.999.999 0 1 0-1.414-1.414ZM8 22v-4c0-.796.316-1.559.879-2.121A3 3 0 0 1 11 15h2a3 3 0 0 1 3 3v4Z");
}
</style><path class="n_1jkub7n"/>`,
		"fallback": "coolicons:save-check-fill-round",
	});
}

export default Component;
