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
		"content": `<style>.f8plnzwol {
  fill: currentColor;
  d: path("M21 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M5.25 4h11.362a4.5 4.5 0 0 0 1.894 4.746L12 12.153l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.918zm7.098 9.664l8.03-4.207A4.5 4.5 0 0 0 22 9.388v7.362a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0");
}
</style><path class="f8plnzwol"/>`,
		"fallback": "fluent:mail-unread-24-filled",
	});
}

export default Component;
