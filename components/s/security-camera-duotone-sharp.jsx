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

.u0q99nbyu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m18.692 3.066l2.071 7.727l-15.455 4.141l-2.071-7.727Z");
}

.z7u980b5i {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3.237 7.207l15.455-4.141l2.07 7.727l-15.454 4.141ZM12 13.14V17h7m0-1v5M15.605 6.999l.518 1.932");
}
</style><g class="ft5dv1b6b"><path class="u0q99nbyu"/><path class="z7u980b5i"/></g>`,
		"fallback": "coolicons:security-camera-duotone-sharp",
	});
}

export default Component;
