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
		"content": `<style>.ltlrqwbnm {
  fill: currentColor;
  d: path("M216 48h-36v-8a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v8H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V68a20 20 0 0 0-20-20m-116-8a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v8h-56Zm56 32v120h-56V72ZM44 72h32v120H44Zm168 120h-32V72h32Z");
}
</style><path class="ltlrqwbnm"/>`,
		"fallback": "ph:suitcase-bold",
	});
}

export default Component;
