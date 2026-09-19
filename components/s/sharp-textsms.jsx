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
		"content": `<style>.h1i0adb3m {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zM9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z");
}
</style><path class="h1i0adb3m"/>`,
		"fallback": "ic:sharp-textsms",
	});
}

export default Component;
