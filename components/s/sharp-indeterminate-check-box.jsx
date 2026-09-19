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
		"content": `<style>.lrey22syf {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-4 10H7v-2h10z");
}
</style><path class="lrey22syf"/>`,
		"fallback": "ic:sharp-indeterminate-check-box",
	});
}

export default Component;
