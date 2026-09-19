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
		"content": `<style>.ybqasgb2p {
  fill: currentColor;
  d: path("M15 2L2.5 13L13 14l-5 7l1 1l12.5-11L11 10l5-7z");
}
</style><path class="ybqasgb2p"/>`,
		"fallback": "ic:sharp-electric-bolt",
	});
}

export default Component;
