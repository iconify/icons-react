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
		"content": `<style>.f_uym8bal {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 14l14 4");
}

.kx-a8669j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 14h.01M19 18h.01");
}

.qc5p80bml {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 8h.01M19 15h.01");
}

.rgrs78b9k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4v16M19 4v16M5 8l14 7");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rgrs78b9k"/><path class="qc5p80bml"/><path class="f_uym8bal"/><path class="kx-a8669j"/></g>`,
		"fallback": "iconoven:slope-chart-sharp",
	});
}

export default Component;
