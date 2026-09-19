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
		"content": `<style>.fis-ukiiq {
  fill: currentColor;
  d: path("M21.05 4H6.83l7.97 7.97zM2.81 2.81L1.39 4.22L10 13v7h4v-3.17l5.78 5.78l1.41-1.42z");
}
</style><path class="fis-ukiiq"/>`,
		"fallback": "ic:sharp-filter-alt-off",
	});
}

export default Component;
