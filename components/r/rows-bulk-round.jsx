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
		"content": `<style>.ga99nhblr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 3h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8m0 10h10a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8");
}
</style><path class="ga99nhblr"/>`,
		"fallback": "coolicons:rows-bulk-round",
	});
}

export default Component;
