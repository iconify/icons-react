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

.llrs1rpgp {
  d: path("M6 11L18 11M7 20L7 23M17 20L17 23");
}

.mn9i-ojuq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M9.2808 5L14.7192 5L14.2192 3L9.7808 3L9.2808 5ZM16.7808 5L19 5C19.5523 5 20 5.4477 20 6L20 20C20 20.5523 19.5523 21 19 21L5 21C4.4477 21 4 20.5523 4 20L4 6C4 5.4477 4.4477 5 5 5L7.2192 5L8.0299 1.7575C8.1411 1.3123 8.5411 1 9 1L15 1C15.4589 1 15.8589 1.3123 15.9701 1.7575L16.7808 5Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="mn9i-ojuq"/><path class="llrs1rpgp"/></g>`,
		"fallback": "keyline-icons:luggage-sharp-duotone",
	});
}

export default Component;
