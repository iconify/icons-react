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
		"content": `<style>.e03rrvbdu {
  fill: currentColor;
  d: path("m18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3zm-5 16h-2v-6h2zm0-8h-2V6H6.77C7.32 5.39 8.11 5 9 5h4z");
}

.l-0vgvbnv {
  fill: currentColor;
  d: path("M6.77 6H11v5h2V5H9c-.89 0-1.68.39-2.23 1M11 13h2v6h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="l-0vgvbnv"/><path class="e03rrvbdu"/>`,
		"fallback": "ic:twotone-hardware",
	});
}

export default Component;
