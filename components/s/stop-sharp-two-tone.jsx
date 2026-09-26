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
		"content": `<style>.ca8ed0byn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 4L19 4C19.5523 4 20 4.4477 20 5L20 19C20 19.5523 19.5523 20 19 20L5 20C4.4477 20 4 19.5523 4 19L4 5C4 4.4477 4.4477 4 5 4Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z38g_y1iu {
  d: path("M5 5L19 5L19 19L5 19L5 5Z");
}
</style><g class="gp_8x1bzb"><path class="ca8ed0byn"/><path class="z38g_y1iu"/></g>`,
		"fallback": "keyline-icons:stop-sharp-two-tone",
	});
}

export default Component;
