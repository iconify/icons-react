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

.jz4jhsbks {
  d: path("M2 4L14.8284 4L22 12L14.8284 20L2 20L2 4Z");
}

.zznlfnbip {
  fill: currentColor;
  d: path("M13.5 12C13.5 12.8284 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5C14.1716 10.5 13.5 11.1716 13.5 12Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="jz4jhsbks"/><path class="zznlfnbip"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-sharp",
	});
}

export default Component;
