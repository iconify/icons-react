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

.k7ejdbcuv {
  d: path("M21.2929 21.2929L13.1464 13.1464M22 13L13 13L13 22");
}

.wvzbsvdug {
  stroke-opacity: 0.4;
  d: path("M10 17L3 17L3 3L17 3L17 10");
}
</style><g class="gp_8x1bzb"><path class="wvzbsvdug"/><path class="k7ejdbcuv"/></g>`,
		"fallback": "keyline-icons:square-arrow-in-up-left-sharp-two-tone",
	});
}

export default Component;
