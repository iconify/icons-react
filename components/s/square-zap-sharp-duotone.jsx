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
		"content": `<style>.eubqfrolr {
  d: path("M13.1111 7.0001L7.0001 13.1111L11.4444 13.1111L10.8889 16.9999L16.9999 10.8889L12.5556 10.8889L13.1111 7.0001Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v8hgvi38z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="eubqfrolr"/></g>`,
		"fallback": "keyline-icons:square-zap-sharp-duotone",
	});
}

export default Component;
