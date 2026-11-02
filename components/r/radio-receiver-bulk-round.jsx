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
		"content": `<style>.av2t1p2fx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 13a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.u4z6b_b8h {
  d: path("m6.486 8.143l10-6a1 1 0 0 1 1.371.343a1 1 0 0 1-.343 1.371l-10 6a1 1 0 0 1-1.371-.343a1 1 0 0 1 .343-1.371M6 15a3 3 0 1 1 6 0a3 3 0 0 1-6 0m11-3a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm-9 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m7 1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="av2t1p2fx"/><path class="u4z6b_b8h"/></g>`,
		"fallback": "coolicons:radio-receiver-bulk-round",
	});
}

export default Component;
