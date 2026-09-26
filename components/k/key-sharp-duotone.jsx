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

.kqaeisbkg {
  fill: currentColor;
  d: path("M11 12C11 14.7614 8.7614 17 6 17C3.2386 17 1 14.7614 1 12C1 9.2386 3.2386 7 6 7C8.7614 7 11 9.2386 11 12Z");
  stroke: none;
}

.z4nzaob9p {
  stroke-opacity: 0.4;
  d: path("M10 12L23 12M17 12L17 17M21 12L21 17");
}
</style><g class="gp_8x1bzb"><path class="z4nzaob9p"/><path class="kqaeisbkg"/></g>`,
		"fallback": "keyline-icons:key-sharp-duotone",
	});
}

export default Component;
