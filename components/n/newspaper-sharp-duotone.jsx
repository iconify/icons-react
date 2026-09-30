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
		"content": `<style>.a86i-qb9z {
  fill: currentColor;
  d: path("M2 9C2 8.4477 2.4477 8 3 8L7 8L7 22L3 22C2.4477 22 2 21.5523 2 21L2 9Z");
  stroke: none;
}

.eq1otwb5h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 9C2 8.4477 2.4477 8 3 8L7 8L7 3C7 2.4477 7.4477 2 8 2Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jgq3v2jqz {
  d: path("M11 8L18 8M11 12L18 12M11 16L16 16");
}
</style><g class="gp_8x1bzb"><path class="eq1otwb5h"/><path class="a86i-qb9z"/><path class="jgq3v2jqz"/></g>`,
		"fallback": "keyline-icons:newspaper-sharp-duotone",
	});
}

export default Component;
