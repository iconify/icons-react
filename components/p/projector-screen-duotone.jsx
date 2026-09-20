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
		"content": `<style>.boizjtb6h {
  d: path("M208 72v112H48V72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c94gfyobh {
  d: path("M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16M128 240a8 8 0 1 1 8-8a8 8 0 0 1-8 8M40 48h176v16H40Zm160 128H56V80h144Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="boizjtb6h"/><path class="c94gfyobh"/></g>`,
		"fallback": "ph:projector-screen-duotone",
	});
}

export default Component;
