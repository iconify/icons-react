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
		"content": `<style>.yxyq2gb9i {
  fill: currentColor;
  d: path("M13 5.733V8h6a1 1 0 0 1 1 1v5h1a1 1 0 0 1 0 2h-1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5H3a1 1 0 0 1 0-2h1V9a1 1 0 0 1 1-1h6V5.733a2.001 2.001 0 1 1 2 0M10 15v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6 0v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0");
}
</style><path class="yxyq2gb9i"/>`,
		"fallback": "coolicons:robot-fill-sharp",
	});
}

export default Component;
