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
		"content": `<style>.levvep35i {
  fill: currentColor;
  d: path("M12 3L2 12h3v8h14v-8h3zM7 18v-7.81l5-4.5l5 4.5V18zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2s2-4 2-4s2 2.9 2 4");
}

.wgkx2gz-z {
  fill: currentColor;
  d: path("m12 5.69l-5 4.5V18h10v-7.81zM12 16c-1.1 0-2-.9-2-2s2-4 2-4s2 2.9 2 4s-.9 2-2 2");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wgkx2gz-z"/><path class="levvep35i"/>`,
		"fallback": "ic:twotone-water-damage",
	});
}

export default Component;
