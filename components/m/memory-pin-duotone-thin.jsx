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
		"content": `<style>.ew2150rox {
  d: path("M4 21h11");
}

.fxnzc9b-v {
  d: path("M12 9v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="le41ikb_c"/><path class="pemn838wn"/><path class="fxnzc9b-v"/><path class="ok9ioqb8x"/><path class="ew2150rox"/></g>`,
		"fallback": "iconmind:memory-pin-duotone-thin",
	});
}

export default Component;
