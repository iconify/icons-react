import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ev0qm_bzf {
  fill: currentColor;
  d: path("M237.9 200.1L141.85 32.18a16 16 0 0 0-27.89 0l-95.89 168a16 16 0 0 0 19.26 22.92L128 192.45l90.67 30.63a16.2 16.2 0 0 0 5.33.92a16 16 0 0 0 13.86-23.9Zm-14.05 7.84L136 178.26V120a8 8 0 0 0-16 0v58.26l-87.84 29.68l-.16.06l95.86-168L224 208Z");
}
</style><path class="ev0qm_bzf"/>`,
		"fallback": "ph:paper-plane",
	});
}

export default Component;
