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
		"content": `<style>.je-a6cc-s {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708l4.75 4.75l-2.878 1.15a1 1 0 0 0-.335 1.636L6.293 13L3 16.293V17h.707L7 13.707l2.61 2.61a1 1 0 0 0 1.636-.335l1.15-2.878l4.75 4.75a.5.5 0 0 0 .708-.708zm14.008 7.732l-3.242 1.62L8.501 6.38l1.621-3.242a2 2 0 0 1 3.203-.52l4.057 4.057a2 2 0 0 1-.52 3.203");
}
</style><path class="je-a6cc-s"/>`,
		"fallback": "fluent:pin-off-20-filled",
	});
}

export default Component;
