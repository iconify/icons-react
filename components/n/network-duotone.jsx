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

.i8qqrsqmt {
  d: path("M152 40v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8M80 168H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8m128 0h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k2yd3ab-f {
  d: path("M232 112h-96V88h8a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v24H24a8 8 0 0 0 0 16h32v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h112v32h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8v-32h32a8 8 0 0 0 0-16M112 40h32v32h-32ZM80 208H48v-32h32Zm128 0h-32v-32h32Z");
}
</style><g class="cuyn6tgcc"><path class="i8qqrsqmt"/><path class="k2yd3ab-f"/></g>`,
		"fallback": "ph:network-duotone",
	});
}

export default Component;
