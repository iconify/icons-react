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
		"content": `<style>.m927b1cms {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25v17.5h17.5");
}

.r-x5n_oxz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 17.5h.01m3.74-10.25h.01m3.99 9.5h.01m4.24-11.5h.01");
}

.rlfoe5b5d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15.75C7.5 11.5 8.5 9 10.25 9s2.25 6 4 6s2.25-8 4.25-8");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="m927b1cms"/><path class="rlfoe5b5d"/><path class="r-x5n_oxz"/></g>`,
		"fallback": "iconoven:overfit-curve",
	});
}

export default Component;
