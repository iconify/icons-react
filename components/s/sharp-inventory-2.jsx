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
		"content": `<style>.qnxdnwbqt {
  fill: currentColor;
  d: path("M2 2v6.7h1V22h18V8.7h1V2zm13 12H9v-2h6zm5-7H4V4h16z");
}
</style><path class="qnxdnwbqt"/>`,
		"fallback": "ic:sharp-inventory-2",
	});
}

export default Component;
