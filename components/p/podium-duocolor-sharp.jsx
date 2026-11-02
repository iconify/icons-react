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

.pk4z40bgl {
  d: path("M8 12H3v9h5m8-6h5v6h-5m-8 0V5h8v16z");
}

.tp-oq1upk {
  stroke-opacity: 0.4;
  d: path("m11 11l2-2v6");
}
</style><g class="nrj6p8qat"><path class="tp-oq1upk"/><path class="pk4z40bgl"/></g>`,
		"fallback": "coolicons:podium-duocolor-sharp",
	});
}

export default Component;
