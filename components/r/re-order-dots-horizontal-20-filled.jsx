import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sou8m4_qb {
  fill: currentColor;
  d: path("M14 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m-5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M5.5 8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m8.5 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M10.5 15a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M4 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0");
}
</style><path class="sou8m4_qb"/>`,
		"fallback": "fluent:re-order-dots-horizontal-20-filled",
	});
}

export default Component;
