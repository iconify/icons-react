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

.h1a-_zb3n {
  fill: currentColor;
  d: path("M13.5 8.5C13.5 9.3284 12.8284 10 12 10C11.1716 10 10.5 9.3284 10.5 8.5C10.5 7.6716 11.1716 7 12 7C12.8284 7 13.5 7.6716 13.5 8.5Z");
  stroke: none;
}

.obb21xv7p {
  d: path("M22 11L22 4L2 4L2 20L13 20M23 17L15 17");
}
</style><g class="gp_8x1bzb"><path class="obb21xv7p"/><path class="h1a-_zb3n"/></g>`,
		"fallback": "keyline-icons:tablet-minus-sharp",
	});
}

export default Component;
