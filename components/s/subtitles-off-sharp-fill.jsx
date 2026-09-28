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
		"content": `<style>.ahhqo1b4s {
  d: path("M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zje8v0o9i {
  fill: currentColor;
  d: path("M21 21L2 21C1.4477 21 1 20.5523 1 20L1 4C1 3.4477 1.4477 3 2 3L3 3L9 9L5 9L5 11L10 11L10 10L13 13L5 13L5 15L14 15L14 14ZM6.6569 3L22 3C22.5523 3 23 3.4477 23 4L23 19.3431Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="zje8v0o9i"/><path class="ahhqo1b4s"/></g>`,
		"fallback": "keyline-icons:subtitles-off-sharp-fill",
	});
}

export default Component;
