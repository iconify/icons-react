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
		"content": `<style>.bpciasb2z {
  d: path("M3 5.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.c11_n0b6s {
  d: path("M6.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k3juqlbuw {
  d: path("M15.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kl5egs07h {
  d: path("M9.5 12.5 12 15l2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7-7k5bqs {
  d: path("M9.5 8.5 12 6l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="bpciasb2z"/><path class="c11_n0b6s"/><path class="k3juqlbuw"/><path class="o7-7k5bqs"/><path class="kl5egs07h"/></g>`,
		"fallback": "iconmind:subscribe-product-outline-regular",
	});
}

export default Component;
