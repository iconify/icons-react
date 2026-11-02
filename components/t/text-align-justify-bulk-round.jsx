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
		"content": `<style>.o0yu7z-4s {
  fill: currentColor;
  d: path("M20 5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z");
}
</style><path class="o0yu7z-4s"/>`,
		"fallback": "coolicons:text-align-justify-bulk-round",
	});
}

export default Component;
