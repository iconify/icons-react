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
		"content": `<style>.e6zk1fbpt {
  fill: currentColor;
  d: path("M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46M94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V240a6 6 0 0 1-12 0v-34.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0a66 66 0 0 0 132 0a6 6 0 0 1 12 0a78.09 78.09 0 0 1-72 77.75");
}
</style><path class="e6zk1fbpt"/>`,
		"fallback": "ph:microphone-light",
	});
}

export default Component;
