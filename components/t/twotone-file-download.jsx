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
		"content": `<style>.bo6u-8bey {
  fill: currentColor;
  d: path("M5 18h14v2H5zm14-9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17L9.83 11z");
}

.sr37ucb8z {
  fill: currentColor;
  d: path("M14.17 11H13V5h-2v6H9.83L12 13.17z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="sr37ucb8z"/><path class="bo6u-8bey"/>`,
		"fallback": "ic:twotone-file-download",
	});
}

export default Component;
