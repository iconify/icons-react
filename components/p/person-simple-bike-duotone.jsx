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

.hrmb43bgv {
  d: path("M232 176a32 32 0 1 1-32-32a32 32 0 0 1 32 32M56 144a32 32 0 1 0 32 32a32 32 0 0 0-32-32");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vtj9kne7q {
  d: path("M164 80a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m36 96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24M56 136a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m136-80h-40a8 8 0 0 1-5.66-2.34L120 91.31L99.31 112l34.35 34.34A8 8 0 0 1 136 152v48a8 8 0 0 1-16 0v-44.69l-37.66-37.65a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 0L155.31 104H192a8 8 0 0 1 0 16");
}
</style><g class="cuyn6tgcc"><path class="hrmb43bgv"/><path class="vtj9kne7q"/></g>`,
		"fallback": "ph:person-simple-bike-duotone",
	});
}

export default Component;
