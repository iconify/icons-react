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
		"content": `<style>.bp75p67iw {
  fill: currentColor;
  d: path("M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z");
}
</style><path class="bp75p67iw"/>`,
		"fallback": "ic:sharp-send",
	});
}

export default Component;
