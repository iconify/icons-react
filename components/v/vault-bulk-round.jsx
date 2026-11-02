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
		"content": `<style>.aib9okb5v {
  d: path("M7 11a5 5 0 1 1 10.001.001A5 5 0 0 1 7 11m2 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2M8 21a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm10 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.k_z_r3y3f {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="k_z_r3y3f"/><path class="aib9okb5v"/></g>`,
		"fallback": "coolicons:vault-bulk-round",
	});
}

export default Component;
