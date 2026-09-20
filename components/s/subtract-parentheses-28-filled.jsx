import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cjbvo_cih {
  fill: currentColor;
  d: path("M7.637 6.285a1 1 0 1 0-1.274-1.542A11.98 11.98 0 0 0 2 14c0 3.727 1.7 7.057 4.363 9.257a1 1 0 0 0 1.274-1.543A9.98 9.98 0 0 1 4 14a9.98 9.98 0 0 1 3.637-7.715m14-1.542a1 1 0 1 0-1.274 1.542A9.98 9.98 0 0 1 24 14a9.98 9.98 0 0 1-3.637 7.715a1 1 0 0 0 1.274 1.542A11.98 11.98 0 0 0 26 14c0-3.727-1.7-7.057-4.363-9.257M8.998 13a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z");
}
</style><path class="cjbvo_cih"/>`,
		"fallback": "fluent:subtract-parentheses-28-filled",
	});
}

export default Component;
