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
		"content": `<style>.drfwr0biz {
  fill: currentColor;
  d: path("M22 2H6v16h16zm-9.53 12L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41zM4 6H2v16h16v-2H4z");
}
</style><path class="drfwr0biz"/>`,
		"fallback": "ic:sharp-library-add-check",
	});
}

export default Component;
