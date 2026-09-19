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
		"content": `<style>.cqrwpn4iq {
  fill: currentColor;
  d: path("M21 1H7v5h2V4h10v16H9v-2H7v5h14zM7.01 13.47l-2.55-2.55l-1.27 1.27L7 16l7.19-7.19l-1.27-1.27z");
}
</style><path class="cqrwpn4iq"/>`,
		"fallback": "ic:sharp-mobile-friendly",
	});
}

export default Component;
