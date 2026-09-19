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
		"content": `<style>.e3invgv4n {
  fill: currentColor;
  d: path("M10 17.62L17.62 10l-10-10l-1.41 1.41l2.38 2.38L2.38 10zm0-12.41L14.79 10H5.21zM19 17c1.1 0 2-.9 2-2c0-1.33-2-3.5-2-3.5s-2 2.17-2 3.5c0 1.1.9 2 2 2M2 20h20v4H2z");
}
</style><path class="e3invgv4n"/>`,
		"fallback": "ic:sharp-format-color-fill",
	});
}

export default Component;
