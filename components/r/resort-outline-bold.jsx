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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.cjtmbcfpi {
  d: path("M13 18v-7h9v7");
}

.ghuq2xb5p {
  d: path("M10.5 12.5a3.5 3.5 0 0 1 0 -7");
}

.k4wc6x-hq {
  d: path("M7 9v9");
}

.n_xjdobth {
  d: path("M3.5 5.5a3.5 3.5 0 0 1 0 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k4wc6x-hq"/><path class="n_xjdobth"/><path class="ghuq2xb5p"/><path class="cjtmbcfpi"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:resort-outline-bold",
	});
}

export default Component;
