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
		"content": `<style>.ajg3myurd {
  d: path("M15.0772 6.2227L15.8044 6.9091C17.2058 8.2316 18 10.0732 18 12C18 13.9268 17.2058 15.7684 15.8044 17.0909L15.0772 17.7773M18.2608 3.7273L18.5498 4C20.7519 6.0782 22 8.9721 22 12C22 15.0279 20.7519 17.9218 18.5498 20L18.2608 20.2727");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tquoxdmeg {
  fill: currentColor;
  d: path("M2 8L5.5858 8L10.2929 3.2929C10.9229 2.6629 12 3.1091 12 4L12 20C12 20.8909 10.9229 21.3371 10.2929 20.7071L5.5858 16L2 16C1.4477 16 1 15.5523 1 15L1 9C1 8.4477 1.4477 8 2 8Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="tquoxdmeg"/><path class="ajg3myurd"/></g>`,
		"fallback": "keyline-icons:volume-sharp-fill",
	});
}

export default Component;
