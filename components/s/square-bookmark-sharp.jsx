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
</style><g class="gp_8x1bzb"><path class="o0ubd-spe"/><path class="klygb23mb"/></g>`,
		"fallback": "keyline-icons:square-bookmark-sharp",
	});
}

export default Component;
