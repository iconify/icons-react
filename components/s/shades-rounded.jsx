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
		"content": `<style>.mwm1n0blz {
  fill: currentColor;
  d: path("M4.79 20.98q-.348 0-.569-.201Q4 20.577 4 20.134V4h-.5q-.213 0-.357-.143T3 3.5t.143-.357T3.5 3h17q.214 0 .357.143T21 3.5t-.143.357T20.5 4H20v16.135q-.025.442-.246.644t-.57.202q-1.694 0-3.1-1.468q-1.405-1.467-1.694-3.013H9.585q-.289 1.546-1.695 3.014q-1.405 1.467-3.1 1.467M9.73 15.5h4.54V3.98H9.73z");
}
</style><path class="mwm1n0blz"/>`,
		"fallback": "material-symbols-light:shades-rounded",
	});
}

export default Component;
