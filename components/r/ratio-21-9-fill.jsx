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
		"content": `<style>.q30d1dbvp {
  fill: currentColor;
  d: path("M1 10C1 8.3431 2.3431 7 4 7L20 7C21.6569 7 23 8.3431 23 10L23 14C23 15.6569 21.6569 17 20 17L4 17C2.3431 17 1 15.6569 1 14L1 10Z");
}
</style><path class="q30d1dbvp"/>`,
		"fallback": "keyline-icons:ratio-21-9-fill",
	});
}

export default Component;
