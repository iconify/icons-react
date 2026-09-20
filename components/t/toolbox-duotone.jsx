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

.k5adg3pnj {
  d: path("M232 120v72a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.va2nl7bls {
  d: path("M224 64h-48v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96ZM32 80h192v32h-32v-8a8 8 0 0 0-16 0v8H80v-8a8 8 0 0 0-16 0v8H32Zm192 112H32v-64h32v8a8 8 0 0 0 16 0v-8h96v8a8 8 0 0 0 16 0v-8h32z");
}
</style><g class="cuyn6tgcc"><path class="k5adg3pnj"/><path class="va2nl7bls"/></g>`,
		"fallback": "ph:toolbox-duotone",
	});
}

export default Component;
