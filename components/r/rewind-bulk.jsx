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
		"content": `<style>.d12co_b7n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.24 6.341A2.5 2.5 0 0 1 13 8.5v.897l5.24-3.056A2.5 2.5 0 0 1 22 8.5v7a2.501 2.501 0 0 1-3.76 2.159L13 14.603v.897a2.501 2.501 0 0 1-3.76 2.159l-6-3.5a2.5 2.5 0 0 1 0-4.318Z");
}
</style><path class="d12co_b7n"/>`,
		"fallback": "coolicons:rewind-bulk",
	});
}

export default Component;
