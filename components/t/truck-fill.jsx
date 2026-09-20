import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yhw_a2bym {
  fill: currentColor;
  d: path("m255.43 117l-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-8-8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a8.1 8.1 0 0 0-.57-3M80 208a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-48-72V72h144v64Zm160 72a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-96V88h34.58l9.6 24Z");
}
</style><path class="yhw_a2bym"/>`,
		"fallback": "ph:truck-fill",
	});
}

export default Component;
