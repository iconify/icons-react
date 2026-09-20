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
		"content": `<style>.ao82dzbke {
  d: path("M200 56a8 8 0 0 1-8 8h-34.23L115.1 192H144a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16h34.23L140.9 64H112a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8");
}

.cuyn6tgcc {
  fill: currentColor;
}

.mlv7bibdo {
  d: path("m192 56l-48 144H64l48-144Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="mlv7bibdo"/><path class="ao82dzbke"/></g>`,
		"fallback": "ph:text-italic-duotone",
	});
}

export default Component;
