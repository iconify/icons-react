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

.ixuubhbfa {
  d: path("M216 160v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8m-88-72a32 32 0 1 0-32-32a32 32 0 0 0 32 32");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qrnllez4e {
  d: path("M208 144h-72V95.19a40 40 0 1 0-16 0V144H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16M104 56a24 24 0 1 1 24 24a24 24 0 0 1-24-24m104 152H48v-48h160zm-40-96h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16");
}
</style><g class="cuyn6tgcc"><path class="ixuubhbfa"/><path class="qrnllez4e"/></g>`,
		"fallback": "ph:joystick-duotone",
	});
}

export default Component;
