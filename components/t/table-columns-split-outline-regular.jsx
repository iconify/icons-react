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
		"content": `<style>.cow3o_29e {
  d: path("m15 9.5 2.5 2.5 -2.5 2.5");
}

.ibqum-bte {
  d: path("M9 9.5 6.5 12 9 14.5");
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r7xk8o29f {
  d: path("M12 4v16");
}
</style><g class="nrj6p8qat"><path class="n48w5yb-p"/><path class="r7xk8o29f"/><path class="ibqum-bte"/><path class="cow3o_29e"/></g>`,
		"fallback": "iconmind:table-columns-split-outline-regular",
	});
}

export default Component;
