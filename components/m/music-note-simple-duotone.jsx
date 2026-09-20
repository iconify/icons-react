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

.fdz9kybzq {
  d: path("m210.3 56.34l-80-24A8 8 0 0 0 120 40v108.26A48 48 0 1 0 136 184V50.75l69.7 20.91a8 8 0 1 0 4.6-15.32M88 216a32 32 0 1 1 32-32a32 32 0 0 1-32 32");
}

.shew7ccxe {
  d: path("M128 184a40 40 0 1 1-40-40a40 40 0 0 1 40 40");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="shew7ccxe"/><path class="fdz9kybzq"/></g>`,
		"fallback": "ph:music-note-simple-duotone",
	});
}

export default Component;
