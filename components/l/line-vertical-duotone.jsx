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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kbgxg_7rn {
  d: path("M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zkz5ybc8j {
  d: path("M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0");
}
</style><g class="cuyn6tgcc"><path class="kbgxg_7rn"/><path class="zkz5ybc8j"/></g>`,
		"fallback": "ph:line-vertical-duotone",
	});
}

export default Component;
