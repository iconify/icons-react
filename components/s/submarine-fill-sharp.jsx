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
		"content": `<style>.ff6etnb9f {
  fill: currentColor;
  d: path("M13 7h1a1 1 0 0 1 1 1v3h2a5 5 0 0 1 0 10H7a1 1 0 0 1-1-1v-3H4v3a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v3h2v-3a1 1 0 0 1 1-1h2V8a1 1 0 0 1 1-1h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3Zm-.99 8H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ff6etnb9f"/>`,
		"fallback": "coolicons:submarine-fill-sharp",
	});
}

export default Component;
