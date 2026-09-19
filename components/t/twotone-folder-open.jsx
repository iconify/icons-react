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
		"content": `<style>.lunxp2xsx {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V8h16z");
}

.z53ih4b1a {
  fill: currentColor;
  d: path("M4 8h16v10H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="z53ih4b1a"/><path class="lunxp2xsx"/>`,
		"fallback": "ic:twotone-folder-open",
	});
}

export default Component;
