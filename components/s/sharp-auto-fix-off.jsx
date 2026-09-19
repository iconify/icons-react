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
		"content": `<style>.fhyg_dbcm {
  fill: currentColor;
  d: path("m20 7l.94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zm-5.83 1.42l1.41 1.41l-1.46 1.46l1.42 1.42l2.87-2.88l-4.24-4.24l-2.88 2.87l1.42 1.42zM1.39 4.22l7.07 7.07l-6.87 6.88l4.24 4.24l6.88-6.87l7.07 7.07l1.41-1.42L2.81 2.81z");
}
</style><path class="fhyg_dbcm"/>`,
		"fallback": "ic:sharp-auto-fix-off",
	});
}

export default Component;
