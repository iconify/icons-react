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
		"content": `<style>.a7sknrbmc {
  fill: currentColor;
  d: path("M16 7V3h-2v4h-4V3H8v4h-.01C6.89 7 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.5V9c0-1.1-.9-2-2-2m0 6.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8z");
}

.ztslz9_ph {
  fill: currentColor;
  d: path("m8 13.65l3.5 3.52V19h1v-1.83l3.5-3.51V9H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ztslz9_ph"/><path class="a7sknrbmc"/>`,
		"fallback": "ic:twotone-power",
	});
}

export default Component;
