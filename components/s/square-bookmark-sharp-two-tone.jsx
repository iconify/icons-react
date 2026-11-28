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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.klygb23mb {
  d: path("M8.269 7.301H15.731L15.763 16.673L12 15.107L8.236 16.673L8.269 7.301Z");
}

.o0ubd-spe {
  d: path("M3 3H21V21H3V3Z");
}

.op4ug9rud {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2H21C21.552 2 22 2.448 22 3V21C22 21.552 21.552 22 21 22H3C2.448 22 2 21.552 2 21V3C2 2.448 2.448 2 3 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="op4ug9rud"/><path class="o0ubd-spe"/><path class="klygb23mb"/></g>`,
		"fallback": "keyline-icons:square-bookmark-sharp-two-tone",
	});
}

export default Component;
