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
		"content": `<style>.arpgl49yd {
  fill: currentColor;
  d: path("m5 10.41l7 7l9-9L19.59 7L12 14.59L6.41 9H11V7H3v8h2z");
}
</style><path class="arpgl49yd"/>`,
		"fallback": "ic:twotone-call-missed",
	});
}

export default Component;
