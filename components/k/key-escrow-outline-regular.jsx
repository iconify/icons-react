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
		"content": `<style>.gib7r1bvf {
  d: path("M12 9.5V12");
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.nrad3_umv {
  d: path("M10 7.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u41hfsjfh {
  d: path("M12 10.5h2.5");
}
</style><g class="nrj6p8qat"><path class="n0n63pb2v"/><path class="nrad3_umv"/><path class="gib7r1bvf"/><path class="u41hfsjfh"/></g>`,
		"fallback": "iconmind:key-escrow-outline-regular",
	});
}

export default Component;
