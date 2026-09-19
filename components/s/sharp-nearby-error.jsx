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
		"content": `<style>.blk4ptbfs {
  fill: currentColor;
  d: path("M12 7.58L16.42 12L12 16.42L7.58 12zm0 11.62L4.8 12L12 4.8l6 6V7.17l-5.99-5.99L1.18 12.01l10.83 10.83L18 16.83V13.2zm8 .8h2v2h-2zm2-10h-2v8h2z");
}
</style><path class="blk4ptbfs"/>`,
		"fallback": "ic:sharp-nearby-error",
	});
}

export default Component;
