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

.ir5lpdz9n {
  d: path("m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V98.75l69.7 20.91A8 8 0 0 0 216 112V64a8 8 0 0 0-5.7-7.66M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112-114.75l-64-19.2v-31.3L200 70Z");
}

.shew7ccxe {
  d: path("M128 184a40 40 0 1 1-40-40a40 40 0 0 1 40 40");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="shew7ccxe"/><path class="ir5lpdz9n"/></g>`,
		"fallback": "ph:music-note-duotone",
	});
}

export default Component;
