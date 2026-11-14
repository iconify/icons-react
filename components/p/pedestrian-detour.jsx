import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fa_nbjbrc {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Zm-1.5 14v-8.5");
}

.qnvxqebrk {
  d: path("M10.5 14q0-4 4-4h.75");
}

.u__znebfc {
  d: path("m13.25 8l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fa_nbjbrc"/><path class="qnvxqebrk"/><path class="u__znebfc"/></g>`,
		"fallback": "uix-sharp:pedestrian-detour",
	});
}

export default Component;
