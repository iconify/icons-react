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
		"content": `<style>.byubznbjk {
  d: path("M216 136c-8 24-56 72-80 80v-32a48 48 0 0 1 48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.srk4dydzl {
  d: path("M168 32H88a56.06 56.06 0 0 0-56 56v80a56.06 56.06 0 0 0 56 56h48a8 8 0 0 0 2.53-.41c26.23-8.75 76.31-58.83 85.06-85.06A8 8 0 0 0 224 136V88a56.06 56.06 0 0 0-56-56M48 168V88a40 40 0 0 1 40-40h80a40 40 0 0 1 40 40v40h-24a56.06 56.06 0 0 0-56 56v24H88a40 40 0 0 1-40-40m96 35.14V184a40 40 0 0 1 40-40h19.14C191 163.5 163.5 191 144 203.14");
}
</style><g class="cuyn6tgcc"><path class="byubznbjk"/><path class="srk4dydzl"/></g>`,
		"fallback": "ph:sticker-duotone",
	});
}

export default Component;
