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
		"content": `<style>.h9i3bw3au {
  d: path("m5 8 2 2 3.5 -3.5");
}

.n3q4scbgf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m5 8 2 2 3.5 -3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n6_f133dv {
  d: path("m5 16 2 2 3.5 -3.5");
}

.rs7k183fq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 5H18v14h-2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t67co0bam {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m5 16 2 2 3.5 -3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.upuk2bbmi {
  d: path("M15.5 5H18v14h-2.5");
}
</style><g class="s0phu2bbs"><path class="n3q4scbgf"/><path class="t67co0bam"/><path class="rs7k183fq"/><path class="h9i3bw3au"/><path class="n6_f133dv"/><path class="upuk2bbmi"/></g>`,
		"fallback": "iconmind:two-phase-duotone-bold",
	});
}

export default Component;
