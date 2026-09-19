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
		"content": `<style>.r3daq2qbd {
  fill: currentColor;
  d: path("M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17L9.83 11zm-6 7h14v2H5z");
}

.sr37ucb8z {
  fill: currentColor;
  d: path("M14.17 11H13V5h-2v6H9.83L12 13.17z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="sr37ucb8z"/><path class="r3daq2qbd"/>`,
		"fallback": "ic:twotone-get-app",
	});
}

export default Component;
