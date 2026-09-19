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
		"content": `<style>.g2yz34b8e {
  fill: currentColor;
  d: path("m21 1l-8.59 8.59L21 18.18zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73z");
}
</style><path class="g2yz34b8e"/>`,
		"fallback": "ic:signal-cellular-off",
	});
}

export default Component;
