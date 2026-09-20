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
		"content": `<style>.snt29pbpn {
  fill: currentColor;
  d: path("M6.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M15 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="snt29pbpn"/>`,
		"fallback": "fluent:re-order-dots-vertical-20-filled",
	});
}

export default Component;
