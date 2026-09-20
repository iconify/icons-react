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
		"content": `<style>.v4biehbdx {
  fill: currentColor;
  d: path("M21.784 2.22a.75.75 0 0 1 0 1.06L3.28 21.784a.75.75 0 1 1-1.06-1.06L20.723 2.22a.75.75 0 0 1 1.06 0");
}
</style><path class="v4biehbdx"/>`,
		"fallback": "fluent:line-24-regular",
	});
}

export default Component;
