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
		"content": `<style>.by2xacctu {
  d: path("M6 3v5");
}

.jmpakbqgq {
  fill: currentColor;
  d: path("M14 18c0 -5 3 -8 8 -8 0 5 -3 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pgsklob1p {
  d: path("M10 3v5");
}

.rhu0tub0r {
  d: path("M14 18c0 -5 3 -8 8 -8 0 5 -3 8 -8 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sjot3p-qh {
  d: path("M6 8h4");
}

.sx4d4gbbz {
  d: path("M8 8v13");
}
</style><g class="s0phu2bbs"><path class="jmpakbqgq"/><path class="by2xacctu"/><path class="pgsklob1p"/><path class="sjot3p-qh"/><path class="sx4d4gbbz"/><path class="rhu0tub0r"/></g>`,
		"fallback": "iconmind:vegetarian-duotone-bold",
	});
}

export default Component;
