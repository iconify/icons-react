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

.ph4tqmbph {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48.24-94.78l-64-40A8 8 0 0 0 100 88v80a8 8 0 0 0 12.24 6.78l64-40a8 8 0 0 0 0-13.56M116 153.57v-51.14L156.91 128Z");
}

.zdc6k4arz {
  d: path("M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m-20 136V88l64 40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="zdc6k4arz"/><path class="ph4tqmbph"/></g>`,
		"fallback": "ph:play-circle-duotone",
	});
}

export default Component;
