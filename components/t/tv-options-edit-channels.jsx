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
		"content": `<style>.lbx4_1b3e {
  fill: currentColor;
  d: path("M2 16v-2h2v2zm0-4v-2h2v2zm0-4V6h2v2zm4 8v-2h4v2zm0-4v-2h13v2zm0-4V6h13v2zm9.95 12l-4.25-4.25l1.425-1.425l2.825 2.825l5.65-5.65l1.4 1.45z");
}
</style><path class="lbx4_1b3e"/>`,
		"fallback": "material-symbols:tv-options-edit-channels",
	});
}

export default Component;
