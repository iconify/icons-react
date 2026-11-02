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

.d5p1ub79d {
  d: path("M15.172 7.414a1 1 0 0 1 1.414 1.414l-7.758 7.758a1 1 0 0 1-1.414-1.414Z");
}

.qje5tacdi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14.315 4.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114m1.842 2.335a2 2 0 1 0 3.686-1.556a2 2 0 0 0-3.686 1.556M2.315 16.443a4.001 4.001 0 0 1 7.37 3.114a4.001 4.001 0 0 1-7.37-3.114m1.842 2.335a2 2 0 1 0 3.686-1.556a2 2 0 0 0-3.686 1.556");
}
</style><g class="cuyn6tgcc"><path class="qje5tacdi"/><path class="d5p1ub79d"/></g>`,
		"fallback": "coolicons:path-bulk-round",
	});
}

export default Component;
