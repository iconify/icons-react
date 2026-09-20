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
		"content": `<style>.eb7__mb_h {
  fill: currentColor;
  d: path("M7 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V6h.079C14.137 6 15 6.853 15 7.912v5.176A1.916 1.916 0 0 1 13.079 15H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.921A1.916 1.916 0 0 1 5 13.088V7.912C5 6.852 5.863 6 6.921 6H7zM8 6h4V3H8z");
}
</style><path class="eb7__mb_h"/>`,
		"fallback": "fluent:usb-plug-20-filled",
	});
}

export default Component;
