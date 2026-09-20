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
		"content": `<style>.coi-np7dk {
  d: path("M15 9v6");
}

.e8mk-vdvn {
  d: path("M6 9v6");
}

.l517yxbln {
  d: path("M12 9v6");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x2sfcqbvg {
  d: path("M18 9v6");
}

.y5k8b5bfa {
  d: path("M9 9v6");
}
</style><g class="s0phu2bbs"><path class="n09nomjwg"/><path class="e8mk-vdvn"/><path class="y5k8b5bfa"/><path class="l517yxbln"/><path class="coi-np7dk"/><path class="x2sfcqbvg"/></g>`,
		"fallback": "iconmind:memory-long-term-outline-bold",
	});
}

export default Component;
