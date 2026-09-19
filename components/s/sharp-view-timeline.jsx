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
		"content": `<style>.b2sifu3ru {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-9 14H6v-2h6zm3-4H9v-2h6zm3-4h-6V7h6z");
}
</style><path class="b2sifu3ru"/>`,
		"fallback": "ic:sharp-view-timeline",
	});
}

export default Component;
