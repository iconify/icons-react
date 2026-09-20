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
		"content": `<style>.qbcuugb5r {
  fill: currentColor;
  d: path("m2 22l4-9h3l2-5h7l4 14zm3.075-2H19.35L16.5 10h-4.15l-2 5H7.3zM13 5V1h2v4zm4.525 1.875l-1.4-1.4L18.95 2.65l1.425 1.4zm-7.05 0L7.65 4.05l1.4-1.425l2.825 2.85zM19.35 20H5.075z");
}
</style><path class="qbcuugb5r"/>`,
		"fallback": "material-symbols:volcano-outline",
	});
}

export default Component;
