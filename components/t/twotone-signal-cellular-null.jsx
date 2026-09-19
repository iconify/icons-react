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
		"content": `<style>.g-nf5tb5r {
  fill: currentColor;
  d: path("M20 6.83V20H6.83zM22 2L2 22h20z");
}
</style><path class="g-nf5tb5r"/>`,
		"fallback": "ic:twotone-signal-cellular-null",
	});
}

export default Component;
