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
		"content": `<style>.ls_lu9bae {
  fill: currentColor;
  d: path("M2 17V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m8-4v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6 1h4v-1h-1a1 1 0 0 1 0-2h1v-1h-4Z");
}
</style><path class="ls_lu9bae"/>`,
		"fallback": "coolicons:security-key-fill-sharp",
	});
}

export default Component;
