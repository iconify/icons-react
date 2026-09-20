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
		"content": `<style>.e5fo1rbbd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 12.5 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h2sq3fbpa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ibuanu9pl {
  fill: currentColor;
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lzdsnnb7v {
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.npenpvb6u {
  fill: currentColor;
  d: path("M6 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rod9nhbdx {
  d: path("m10 12.5 2 2 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t917aebob {
  fill: currentColor;
  d: path("M16 4.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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
</style><g class="s0phu2bbs"><path class="npenpvb6u"/><path class="ibuanu9pl"/><path class="t917aebob"/><path class="e5fo1rbbd"/><path class="h2sq3fbpa"/><path class="tgth1rbuy"/><path class="lzdsnnb7v"/><path class="ydp7-vbsy"/><path class="rod9nhbdx"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:noise-inject-duotone-bold",
	});
}

export default Component;
