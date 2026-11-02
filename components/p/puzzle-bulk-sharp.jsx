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
		"content": `<style>.kiiremaun {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17.237 6H21a1 1 0 0 1 1 1v5a1 1 0 0 1-1.447.894A1.237 1.237 0 0 0 18.764 14a1.232 1.232 0 0 0 1.789 1.106A1 1 0 0 1 22 16v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.763a3.238 3.238 0 0 1 0-6.474V7a1 1 0 0 1 1-1h3.763a3.238 3.238 0 0 1 6.474 0");
}
</style><path class="kiiremaun"/>`,
		"fallback": "coolicons:puzzle-bulk-sharp",
	});
}

export default Component;
