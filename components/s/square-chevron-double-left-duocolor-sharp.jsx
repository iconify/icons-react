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
		"content": `<style>.hanzt1qzc {
  stroke-opacity: 0.4;
  d: path("m10 9l-3 3l3 3m6-6l-3 3l3 3");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hanzt1qzc"/><path class="j_psw1y4g"/></g>`,
		"fallback": "coolicons:square-chevron-double-left-duocolor-sharp",
	});
}

export default Component;
