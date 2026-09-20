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
		"content": `<style>.ca4aen3yr {
  fill: currentColor;
  d: path("M16 18h3v3h-3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fah6drbfn {
  d: path("M16 18h3v3h-3Z");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.n2em18brm {
  d: path("M9 10c4 2 6 5 7 8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yyvm7xbin {
  fill: currentColor;
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yyvm7xbin"/><path class="ca4aen3yr"/><path class="lo7kp72nh"/><path class="n2em18brm"/><path class="fah6drbfn"/></g>`,
		"fallback": "iconmind:leash-duotone-bold",
	});
}

export default Component;
