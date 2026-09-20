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

.goeug6bgp {
  d: path("M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.piooxfbtp {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-9.22-128l-4.19 25.14A38.8 38.8 0 0 1 124 112a36 36 0 0 1 0 72a35.54 35.54 0 0 1-25.71-10.4a8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40a19.73 19.73 0 0 0-14.29 5.6a8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16Z");
}
</style><g class="cuyn6tgcc"><path class="goeug6bgp"/><path class="piooxfbtp"/></g>`,
		"fallback": "ph:number-circle-five-duotone",
	});
}

export default Component;
