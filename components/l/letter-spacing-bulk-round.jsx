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

.eml2q1bzi {
  d: path("M8 7a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0V9h-4v1a1 1 0 0 1-2 0Zm6 0a2 2 0 1 0-4 0Z");
}

.mjobq84pb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.414 16h13.172l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L18.586 18H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414Z");
}
</style><g class="cuyn6tgcc"><path class="mjobq84pb"/><path class="eml2q1bzi"/></g>`,
		"fallback": "coolicons:letter-spacing-bulk-round",
	});
}

export default Component;
