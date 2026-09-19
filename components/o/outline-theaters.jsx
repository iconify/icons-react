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
		"content": `<style>.spmq4vbsj {
  fill: currentColor;
  d: path("M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3zM8 17H6v-2h2zm0-4H6v-2h2zm0-4H6V7h2zm6 10h-4V5h4zm4-2h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V7h2z");
}
</style><path class="spmq4vbsj"/>`,
		"fallback": "ic:outline-theaters",
	});
}

export default Component;
