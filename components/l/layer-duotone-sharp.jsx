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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.trogvb2-r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 8l4-2l8 4l-8 4l-8-4zm-4 6l8 4l8-4");
}

.yro7bpb5g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m8 8l4-2l8 4l-8 4l-8-4Z");
}
</style><g class="ft5dv1b6b"><path class="yro7bpb5g"/><path class="trogvb2-r"/></g>`,
		"fallback": "coolicons:layer-duotone-sharp",
	});
}

export default Component;
