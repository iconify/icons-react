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

.ose1lsbtw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 11L22 11C22.5523 11 23 11.4477 23 12L23 20C23 20.5523 22.5523 21 22 21L12 21C11.4477 21 11 20.5523 11 20L11 12C11 11.4477 11.4477 11 12 11Z");
  stroke: none;
}

.owjlmbb3u {
  d: path("M22 9L22 4L2 4L2 20L9 20M12 12L22 12L22 20L12 20L12 12Z");
}
</style><g class="gp_8x1bzb"><path class="ose1lsbtw"/><path class="owjlmbb3u"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-sharp-two-tone",
	});
}

export default Component;
