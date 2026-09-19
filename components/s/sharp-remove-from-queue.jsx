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
		"content": `<style>.bkdzxlbum {
  fill: currentColor;
  d: path("M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-5-7v2H8v-2z");
}
</style><path class="bkdzxlbum"/>`,
		"fallback": "ic:sharp-remove-from-queue",
	});
}

export default Component;
