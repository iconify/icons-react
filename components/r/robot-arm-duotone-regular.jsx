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
		"content": `<style>.b6ubinbne {
  d: path("m6 12 6 -6h8v3.5");
}

.bphmvlb8r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e79pod60b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gbszb4bja {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 6v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzh4n16ws {
  d: path("M6 12v8");
}

.i-ztrxcqw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m6 12 6 -6h8v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o46_3ibvz {
  d: path("M3 20h6");
}

.ti0atfbnf {
  d: path("M17 6v3.5");
}
</style><g class="nrj6p8qat"><path class="e79pod60b"/><path class="bphmvlb8r"/><path class="i-ztrxcqw"/><path class="gbszb4bja"/><path class="o46_3ibvz"/><path class="gzh4n16ws"/><path class="b6ubinbne"/><path class="ti0atfbnf"/></g>`,
		"fallback": "iconmind:robot-arm-duotone-regular",
	});
}

export default Component;
