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
		"content": `<style>.h8yauubuk {
  fill: currentColor;
  d: path("M20 12c0-1.1.9-2 2-2V4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20v-6c-1.1 0-2-.9-2-2m-4.42 4.8L12 14.5l-3.58 2.3l1.08-4.12l-3.29-2.69l4.24-.25L12 5.8l1.54 3.95l4.24.25l-3.29 2.69z");
}
</style><path class="h8yauubuk"/>`,
		"fallback": "ic:sharp-local-activity",
	});
}

export default Component;
