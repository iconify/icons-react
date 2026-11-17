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

.pcz2kac2b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 17l3-4l3 4c-.006 4-5.994 4-6 0");
}

.sl9ddkbub {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h5l2 3l-2 3H3m18-6h-5l-2 3l2 3h5m-9 4l-3 4c0 4 6 4 6 0Z");
}
</style><g class="ft5dv1b6b"><path class="pcz2kac2b"/><path class="sl9ddkbub"/></g>`,
		"fallback": "coolicons:pipe-droplet-duotone-round",
	});
}

export default Component;
