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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k__5w9oyx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 13a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Z");
}

.u8o2urv0n {
  d: path("M7 7a5 5 0 0 1 10 0v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0Zm3.158 7.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><g class="cuyn6tgcc"><path class="k__5w9oyx"/><path class="u8o2urv0n"/></g>`,
		"fallback": "coolicons:lock-bulk-round",
	});
}

export default Component;
