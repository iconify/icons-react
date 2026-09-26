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

.kvt67ihpg {
  stroke-opacity: 0.4;
  d: path("M3 18L21 18L21 5L15.5 5M6.2929 14.7071L3 18L6.2929 21.2929");
}

.yv4c-x_5c {
  d: path("M10.5547 4.2968L12.5 3L12.5 10M3 12L3 5L8 5");
}
</style><g class="gp_8x1bzb"><path class="kvt67ihpg"/><path class="yv4c-x_5c"/></g>`,
		"fallback": "keyline-icons:repeat-1-sharp-two-tone",
	});
}

export default Component;
