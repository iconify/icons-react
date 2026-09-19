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
		"content": `<style>.mvd5n52gk {
  fill: currentColor;
  d: path("M4 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2M1 9h6l7-5l1.31 1.52l-4.17 2.98H14L21.8 4L23 5.4L14.5 12L14 22h-2l-.5-10L8 11H1z");
}
</style><path class="mvd5n52gk"/>`,
		"fallback": "ic:sharp-sports-gymnastics",
	});
}

export default Component;
