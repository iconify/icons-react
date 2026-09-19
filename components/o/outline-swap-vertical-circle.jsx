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
		"content": `<style>.e04uyvn0d {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8M6.5 9L10 5.5L13.5 9H11v4H9V9zm11 6L14 18.5L10.5 15H13v-4h2v4z");
}
</style><path class="e04uyvn0d"/>`,
		"fallback": "ic:outline-swap-vertical-circle",
	});
}

export default Component;
