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

.f_1c03m3a {
  d: path("M128 64v64H24Zm104 64H128v64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ihpk138tc {
  d: path("m236.19 134.81l-104 64A8 8 0 0 1 120 192V78.32l-91.81 56.49a8 8 0 0 1-8.38-13.62l104-64A8 8 0 0 1 136 64v113.68l91.81-56.49a8 8 0 0 1 8.38 13.62");
}
</style><g class="cuyn6tgcc"><path class="f_1c03m3a"/><path class="ihpk138tc"/></g>`,
		"fallback": "ph:wave-sawtooth-duotone",
	});
}

export default Component;
