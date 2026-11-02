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
		"content": `<style>.hpiexqxwl {
  d: path("M5 7h14v12H5zm3 12l-1 2m9-2l1 2M5 13h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rp_vibb3t {
  stroke-opacity: 0.4;
  d: path("M9 3h6m-3 0v4m-3 9h.01M15 16h.01");
}
</style><g class="nrj6p8qat"><path class="rp_vibb3t"/><path class="hpiexqxwl"/></g>`,
		"fallback": "coolicons:tram-duocolor-sharp",
	});
}

export default Component;
