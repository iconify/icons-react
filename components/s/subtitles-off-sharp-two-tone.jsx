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
		"content": `<style>.gmk4w8bsv {
  d: path("M20 20L2 20L2 4L4 4M5 10L10 10M5 14L14 14M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o_d3irbas {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 21L2 21C1.4477 21 1 20.5523 1 20L1 4C1 3.4477 1.4477 3 2 3L3 3ZM6.6569 3L22 3C22.5523 3 23 3.4477 23 4L23 19.3431Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="o_d3irbas"/><path class="gmk4w8bsv"/></g>`,
		"fallback": "keyline-icons:subtitles-off-sharp-two-tone",
	});
}

export default Component;
