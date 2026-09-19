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
		"content": `<style>.v2wc4yb-g {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M6.5 9L10 5.5L13.5 9H11v4H9V9zm7.5 9.5L10.5 15H13v-4h2v4h2.5z");
}
</style><path class="v2wc4yb-g"/>`,
		"fallback": "ic:sharp-swap-vertical-circle",
	});
}

export default Component;
