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
		"content": `<style>.u2vaj5phe {
  fill: currentColor;
  d: path("M13 13h4v2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.x69mkiumm {
  fill: currentColor;
  d: path("M19 11h-8v6h8zm-2 4h-4v-2h4zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3m0 16.02H3V4.97h18z");
}
</style><path class="x69mkiumm"/><path class="u2vaj5phe"/>`,
		"fallback": "ic:twotone-picture-in-picture-alt",
	});
}

export default Component;
