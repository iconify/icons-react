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
		"content": `<style>.je_90ybmv {
  fill: currentColor;
  d: path("M4 3H2v14h11v-2H4zm18.24 12.96l-2.53 1.15l-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v11h10l3.41 7l5.07-2.32z");
}
</style><path class="je_90ybmv"/>`,
		"fallback": "ic:sharp-airline-seat-legroom-extra",
	});
}

export default Component;
