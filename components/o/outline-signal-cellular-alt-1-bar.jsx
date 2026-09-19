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
		"content": `<style>.e6cuozbxd {
  fill: currentColor;
  d: path("M5 14h3v6H5z");
}
</style><path class="e6cuozbxd"/>`,
		"fallback": "ic:outline-signal-cellular-alt-1-bar",
	});
}

export default Component;
