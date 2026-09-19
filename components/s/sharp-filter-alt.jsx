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
		"content": `<style>.b-b_ctaqj {
  fill: currentColor;
  d: path("M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z");
}
</style><path class="b-b_ctaqj"/>`,
		"fallback": "ic:sharp-filter-alt",
	});
}

export default Component;
