import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g5w9hdcbr {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h12V6a2 2 0 0 0-2-2zm10 6.5h-5.5V16H14a2 2 0 0 0 2-2zm-6.5 0H4V14a2 2 0 0 0 2 2h3.5z");
}
</style><path class="g5w9hdcbr"/>`,
		"fallback": "fluent:layout-row-two-split-bottom-20-regular",
	});
}

export default Component;
