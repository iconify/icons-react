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
		"content": `<style>.n6_badb9n {
  fill: currentColor;
  d: path("M22 7.25A3.25 3.25 0 0 0 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h7.751v-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h9.25v5.519a1.75 1.75 0 0 1 1.5.502V5.5h2.75c.966 0 1.75.784 1.75 1.75v9.258l1.28 1.42c.142-.366.22-.763.22-1.178zm-7.514 4.8a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878l-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7");
}
</style><path class="n6_badb9n"/>`,
		"fallback": "fluent:panel-right-cursor-24-regular",
	});
}

export default Component;
