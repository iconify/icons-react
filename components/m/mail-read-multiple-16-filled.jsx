import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qqp4bieav {
  fill: currentColor;
  d: path("M7.24 1.061a.5.5 0 0 0-.48 0L1.7 3.821c-.202.11-.367.267-.487.453L7 7.43l5.787-3.156a1.34 1.34 0 0 0-.487-.452zM1 10V5.297l5.76 3.142a.5.5 0 0 0 .48 0L13 5.297V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2m2.268 3A2 2 0 0 0 5 14h6a4 4 0 0 0 4-4V6a2 2 0 0 0-1-1.732V10a3 3 0 0 1-3 3z");
}
</style><path class="qqp4bieav"/>`,
		"fallback": "fluent:mail-read-multiple-16-filled",
	});
}

export default Component;
