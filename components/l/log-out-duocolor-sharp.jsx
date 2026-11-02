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
		"content": `<style>.b6i7a1b8w {
  stroke-opacity: 0.4;
  d: path("m18 15l3-3m0 0l-3-3m3 3H11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y6k8asb0k {
  d: path("M14 17v4H3V3h11v4");
}
</style><g class="nrj6p8qat"><path class="b6i7a1b8w"/><path class="y6k8asb0k"/></g>`,
		"fallback": "coolicons:log-out-duocolor-sharp",
	});
}

export default Component;
