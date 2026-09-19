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
		"content": `<style>.jrshe9b-n {
  fill: currentColor;
  d: path("M1 9h2V7H1zm0 4h2v-2H1zm8 8h2v-2H9zm-8-4h2v-2H1zm0 4h2v-2H1zM23 3H13v6h10zm-2 14h2v-2h-2zM9 5h2V3H9zM5 21h2v-2H5zM5 5h2V3H5zM1 5h2V3H1zm20 8h2v-2h-2zm-8 8h2v-2h-2zm4 0h2v-2h-2zm4 0h2v-2h-2z");
}
</style><path class="jrshe9b-n"/>`,
		"fallback": "ic:sharp-tab-unselected",
	});
}

export default Component;
