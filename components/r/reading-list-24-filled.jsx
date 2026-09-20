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
		"content": `<style>.yaa8adcrd {
  fill: currentColor;
  d: path("M20 18a1 1 0 0 1 .117 1.993L20 20H7a1 1 0 0 1-.117-1.993L7 18zm-3-3a1 1 0 0 1 .117 1.993L17 17H4a1 1 0 0 1-.117-1.993L4 15zm3-3a1 1 0 0 1 .117 1.993L20 14H7a1 1 0 0 1-.117-1.993L7 12zM6 5a3 3 0 0 1 2.78 1.873a1 1 0 0 1-1.803.857l-.05-.105A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .117 1.993L17.5 11H6a3 3 0 0 1 0-6m14 1a1 1 0 0 1 .117 1.993L20 8h-9a1 1 0 0 1-.117-1.993L11 6z");
}
</style><path class="yaa8adcrd"/>`,
		"fallback": "fluent:reading-list-24-filled",
	});
}

export default Component;
