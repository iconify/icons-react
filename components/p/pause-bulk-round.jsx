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
		"content": `<style>.erehkzbrg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm11 0a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3Z");
}
</style><path class="erehkzbrg"/>`,
		"fallback": "coolicons:pause-bulk-round",
	});
}

export default Component;
