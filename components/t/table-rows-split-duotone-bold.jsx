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
		"content": `<style>.n-9hyjbad {
  fill: currentColor;
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.s-gg8lbxh {
  d: path("m9.5 15 2.5 2.5 2.5 -2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wshbdfbhg {
  d: path("M9.5 9 12 6.5 14.5 9");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="s0phu2bbs"><path class="n-9hyjbad"/><path class="n48w5yb-p"/><path class="x26a8iq1c"/><path class="wshbdfbhg"/><path class="s-gg8lbxh"/></g>`,
		"fallback": "iconmind:table-rows-split-duotone-bold",
	});
}

export default Component;
