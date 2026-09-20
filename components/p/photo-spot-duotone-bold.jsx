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
		"content": `<style>.atyo14tkp {
  d: path("M8 8h8v5H8Z");
}

.go1co5b_o {
  d: path("M11 10.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h2fut2bsa {
  fill: currentColor;
  d: path("M11 10.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.p67gkiiyp {
  fill: currentColor;
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ubeu0jbbs {
  fill: currentColor;
  d: path("M8 8h8v5H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="p67gkiiyp"/><path class="ubeu0jbbs"/><path class="h2fut2bsa"/><path class="qad3kqbgr"/><path class="atyo14tkp"/><path class="go1co5b_o"/></g>`,
		"fallback": "iconmind:photo-spot-duotone-bold",
	});
}

export default Component;
