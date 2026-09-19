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
		"content": `<style>.iqxfwibxg {
  fill: currentColor;
  d: path("M23 2H1v16h9l-2 3v1h8v-1l-2-3h9zm-2 12H3V4h18z");
}
</style><path class="iqxfwibxg"/>`,
		"fallback": "ic:sharp-desktop-mac",
	});
}

export default Component;
