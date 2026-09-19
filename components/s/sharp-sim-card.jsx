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
		"content": `<style>.m23b6h8ct {
  fill: currentColor;
  d: path("M19.99 2H10L4 8v14h16zM9 19H7v-2h2zm8 0h-2v-2h2zm-8-4H7v-4h2zm4 4h-2v-4h2zm0-6h-2v-2h2zm4 2h-2v-4h2z");
}
</style><path class="m23b6h8ct"/>`,
		"fallback": "ic:sharp-sim-card",
	});
}

export default Component;
