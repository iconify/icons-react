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
		"content": `<style>.g2jj5pbey {
  d: path("M9 9.5v5");
}

.ogtwkzbca {
  d: path("M22 9.5h-7v5h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.si7iehb9m {
  d: path("M6.5 12h5");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vyks9vbfn"/><path class="ogtwkzbca"/><path class="g2jj5pbey"/><path class="si7iehb9m"/></g>`,
		"fallback": "iconmind:wallet-add-outline-bold",
	});
}

export default Component;
