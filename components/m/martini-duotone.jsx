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

.rgif9r_kp {
  d: path("M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM75.31 80h105.38L128 132.69Zm137.38-32l-16 16H59.31l-16-16Z");
}

.y0_ykxbus {
  d: path("m200 72l-72 72l-72-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="y0_ykxbus"/><path class="rgif9r_kp"/></g>`,
		"fallback": "ph:martini-duotone",
	});
}

export default Component;
