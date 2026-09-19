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
		"content": `<style>.zdb100-qt {
  fill: currentColor;
  d: path("M22 3H2.01L2 17h20zM11 6h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm-1 2H5V9h2zm0-3H5V6h2zm9 7H8v-2h8zm0-4h-2V9h2zm0-3h-2V6h2zm3 3h-2V9h2zm0-3h-2V6h2zm-7 15l4-4H8z");
}
</style><path class="zdb100-qt"/>`,
		"fallback": "ic:sharp-keyboard-hide",
	});
}

export default Component;
