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
		"content": `<style>.jmyxa7ijf {
  fill: currentColor;
  d: path("M16 20H2V4h14zm2-12h4V4h-4zm0 12h4v-4h-4zm0-6h4v-4h-4z");
}
</style><path class="jmyxa7ijf"/>`,
		"fallback": "ic:sharp-view-sidebar",
	});
}

export default Component;
