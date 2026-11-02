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
		"content": `<style>.hkrtyhkex {
  stroke-opacity: 0.4;
  d: path("M12 18H6a2 2 0 0 1-2-2v-4l1-2c.613-1.226 1.774-2 3-2h8c1.226 0 2.387.774 3 2l1 2v4a2 2 0 0 1-2 2zm-6 0h2v2H6Zm10 0h2v2h-2ZM3 12h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uf7ef_qpg {
  d: path("M10 5h4M8 15h.01M16 15h.01");
}
</style><g class="nrj6p8qat"><path class="hkrtyhkex"/><path class="uf7ef_qpg"/></g>`,
		"fallback": "coolicons:taxi-duocolor-round",
	});
}

export default Component;
