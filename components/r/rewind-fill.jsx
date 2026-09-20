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
		"content": `<style>.dnmlfgb5a {
  fill: currentColor;
  d: path("M232 71.84v112.32a15.92 15.92 0 0 1-24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 1-24.48 13.34l-88.19-56.16a15.8 15.8 0 0 1 0-26.68l88.19-56.16A15.91 15.91 0 0 1 128 71.84v37.3l79.52-50.64A15.91 15.91 0 0 1 232 71.84");
}
</style><path class="dnmlfgb5a"/>`,
		"fallback": "ph:rewind-fill",
	});
}

export default Component;
