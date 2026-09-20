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
		"content": `<style>.lmels1bzr {
  fill: currentColor;
  d: path("M17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2l-.09.007a.5.5 0 0 0-.402.402L17 14.5V17h-2.502l-.09.008a.5.5 0 0 0-.402.402l-.008.09l.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008l.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001l.09-.008a.5.5 0 0 0 .402-.402l.008-.09l-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zm-6.481 4c.054.704.22 1.377.48 2H7a1 1 0 0 1-.117-1.993L7 18zm.479-3a6.5 6.5 0 0 0-.48 2H4a1 1 0 0 1-.117-1.993L4 15zm2.537-3a6.5 6.5 0 0 0-2.013 2H7a1 1 0 0 1-.117-1.993L7 12zM6 5a3 3 0 0 1 2.78 1.873a1 1 0 0 1-1.803.857l-.05-.105A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .117 1.993L17.5 11H6a3 3 0 0 1 0-6m14 1a1 1 0 0 1 .117 1.993L20 8h-9a1 1 0 0 1-.117-1.993L11 6z");
}
</style><path class="lmels1bzr"/>`,
		"fallback": "fluent:reading-list-add-24-filled",
	});
}

export default Component;
