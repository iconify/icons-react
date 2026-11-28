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
		"content": `<style>.k_qsmjzvx {
  d: path("M9 10L11 12L15 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tat-swbnt {
  stroke-opacity: 0.4;
  d: path("M3 7.75L3 6C3 4.3431 4.3431 3 6 3M10.5 3L13.5 3M18 3C19.6569 3 21 4.3431 21 6L21 7.75M21 12.25L21 14C21 15.6569 19.6569 17 18 17M14 17L11 17M7 17L3 21L3 12.25");
}
</style><g class="nrj6p8qat"><path class="tat-swbnt"/><path class="k_qsmjzvx"/></g>`,
		"fallback": "keyline-icons:message-square-dashed-check-duotone",
	});
}

export default Component;
