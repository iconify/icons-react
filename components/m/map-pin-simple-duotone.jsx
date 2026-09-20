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
		"content": `<style>.bynl4vb5x {
  d: path("M184 72a56 56 0 1 0-64 55.42V232a8 8 0 0 0 16 0V127.42A56.09 56.09 0 0 0 184 72m-56 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}

.cuyn6tgcc {
  fill: currentColor;
}

.y413owpnj {
  d: path("M176 72a48 48 0 1 1-48-48a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="y413owpnj"/><path class="bynl4vb5x"/></g>`,
		"fallback": "ph:map-pin-simple-duotone",
	});
}

export default Component;
