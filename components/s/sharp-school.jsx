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
		"content": `<style>.x0vdqy99x {
  fill: currentColor;
  d: path("M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3L1 9l11 6l9-4.91V17h2V9z");
}
</style><path class="x0vdqy99x"/>`,
		"fallback": "ic:sharp-school",
	});
}

export default Component;
