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
		"content": `<style>.lu2dvbacc {
  fill: currentColor;
  d: path("M11.35 8.52L11 5h5V1h2v4h5l-1.38 13.79L18 15.17zM21.9 21.9L2.1 2.1L.69 3.51l5.7 5.7C3.46 9.83 1 11.76 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49zM1 23h15v-2H1z");
}
</style><path class="lu2dvbacc"/>`,
		"fallback": "ic:sharp-no-food",
	});
}

export default Component;
