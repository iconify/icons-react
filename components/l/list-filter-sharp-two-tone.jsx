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

.jslxdxt1t {
  d: path("M5 12L19 12M9 18L15 18");
}

.v0mba5b-a {
  stroke-opacity: 0.4;
  d: path("M1 6L23 6");
}
</style><g class="gp_8x1bzb"><path class="v0mba5b-a"/><path class="jslxdxt1t"/></g>`,
		"fallback": "keyline-icons:list-filter-sharp-two-tone",
	});
}

export default Component;
