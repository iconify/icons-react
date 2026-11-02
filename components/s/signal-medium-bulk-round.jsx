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

.lnwupqbzi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 19h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}

.wpn6sw86c {
  d: path("M13 8a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0Zm-4 4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0Zm-4 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="lnwupqbzi"/><path class="wpn6sw86c"/></g>`,
		"fallback": "coolicons:signal-medium-bulk-round",
	});
}

export default Component;
