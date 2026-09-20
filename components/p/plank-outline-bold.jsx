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
		"content": `<style>.bhkm33b7x {
  d: path("M2 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x8_u9-97v {
  d: path("m6 8 4 4h10");
}

.zpp3fehhr {
  d: path("M10 12v3");
}

.zuuhu6bzg {
  d: path("M6 15h6");
}
</style><g class="s0phu2bbs"><path class="bhkm33b7x"/><path class="x8_u9-97v"/><path class="zpp3fehhr"/><path class="zuuhu6bzg"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:plank-outline-bold",
	});
}

export default Component;
