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
		"content": `<style>.lzdsnnb7v {
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rod9nhbdx {
  d: path("m10 12.5 2 2 2 -2");
}

.tgth1rbuy {
  d: path("M6 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}

.ydp7-vbsy {
  d: path("M16 4.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="tgth1rbuy"/><path class="lzdsnnb7v"/><path class="ydp7-vbsy"/><path class="rod9nhbdx"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:noise-inject-outline-regular",
	});
}

export default Component;
