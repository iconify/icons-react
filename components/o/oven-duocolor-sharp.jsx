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
		"content": `<style>.ei8fqnb-b {
  stroke-opacity: 0.4;
  d: path("M8 13h8v5H8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.um5xk4bzf {
  d: path("M4 3h16v18H4Zm4 3h.01M12 6h.01M16 6h.01M8 10h8");
}
</style><g class="nrj6p8qat"><path class="ei8fqnb-b"/><path class="um5xk4bzf"/></g>`,
		"fallback": "coolicons:oven-duocolor-sharp",
	});
}

export default Component;
