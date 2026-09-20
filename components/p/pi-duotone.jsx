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

.u0d0qdwvo {
  d: path("M232 172a36 36 0 0 1-72 0V72H96v128a8 8 0 0 1-16 0V72h-8a40 40 0 0 0-40 40a8 8 0 0 1-16 0a56.06 56.06 0 0 1 56-56h152a8 8 0 0 1 0 16h-48v100a20 20 0 0 0 40 0a8 8 0 0 1 16 0");
}

.zzkrtobrt {
  d: path("M196 200H88V64h80v108a28 28 0 0 0 28 28");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="zzkrtobrt"/><path class="u0d0qdwvo"/></g>`,
		"fallback": "ph:pi-duotone",
	});
}

export default Component;
