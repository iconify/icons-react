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
		"content": `<style>.gfnhmpggj {
  d: path("M22 4L9.1716 4L2 12L9.1716 20L22 20L22 4Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.mabku0myx {
  fill: currentColor;
  d: path("M10.5 12C10.5 12.8284 9.8284 13.5 9 13.5C8.1716 13.5 7.5 12.8284 7.5 12C7.5 11.1716 8.1716 10.5 9 10.5C9.8284 10.5 10.5 11.1716 10.5 12Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="gfnhmpggj"/><path class="mabku0myx"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-sharp",
	});
}

export default Component;
