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
		"content": `<style>.d0p0keb9x {
  d: path("M1.555 14.3L5 12L9.318 20L14.034 4H23");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z1g3tg9cp {
  d: path("M15.707 11.71L19 15M19 15L22.293 18.29M19 15L22.293 11.71M19 15L15.707 18.29");
}
</style><g class="gp_8x1bzb"><path class="d0p0keb9x"/><path class="z1g3tg9cp"/></g>`,
		"fallback": "keyline-icons:radicand-sharp-fill",
	});
}

export default Component;
