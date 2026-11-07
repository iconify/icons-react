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
		"content": `<style>.u4ct_bqpx {
  fill: currentColor;
  d: path("M16 2a3 3 0 0 1 3 3v11h1a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H4a2 2 0 0 1-2-2V5a3 3 0 0 1 3-3ZM6 5a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Zm9 2h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m0 4h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m4 9a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Z");
}
</style><path class="u4ct_bqpx"/>`,
		"fallback": "coolicons:scroll-text-fill",
	});
}

export default Component;
