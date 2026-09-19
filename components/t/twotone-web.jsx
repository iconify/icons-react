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
		"content": `<style>.e0bns547u {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5.5 14H4v-3.5h10.5zm0-5.5H4V9h10.5zM20 18h-3.5V9H20z");
}

.y0eedabcd {
  fill: currentColor;
  d: path("M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM16.5 9H20v9h-3.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="y0eedabcd"/><path class="e0bns547u"/>`,
		"fallback": "ic:twotone-web",
	});
}

export default Component;
