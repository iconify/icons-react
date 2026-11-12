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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v6eiu0bth {
  d: path("M3 3h5l2 3l-2 3H3m18-6h-5l-2 3l2 3h5");
}

.vzgwh6bxm {
  stroke-opacity: 0.4;
  d: path("m12 13l-3 4c0 4 6 4 6 0Z");
}
</style><g class="nrj6p8qat"><path class="vzgwh6bxm"/><path class="v6eiu0bth"/></g>`,
		"fallback": "coolicons:pipe-droplet-duocolor-sharp",
	});
}

export default Component;
