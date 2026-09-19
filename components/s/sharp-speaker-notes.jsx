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
		"content": `<style>.caj0xxbph {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zM8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm7 6h-5v-2h5zm3-3h-8V9h8zm0-3h-8V6h8z");
}
</style><path class="caj0xxbph"/>`,
		"fallback": "ic:sharp-speaker-notes",
	});
}

export default Component;
