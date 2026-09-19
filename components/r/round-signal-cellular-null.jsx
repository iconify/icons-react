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
		"content": `<style>.ow614gb_b {
  fill: currentColor;
  d: path("M20 6.83V19c0 .55-.45 1-1 1H6.83zm.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7");
}
</style><path class="ow614gb_b"/>`,
		"fallback": "ic:round-signal-cellular-null",
	});
}

export default Component;
