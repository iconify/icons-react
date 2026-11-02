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
		"content": `<style>.gvxognb3s {
  stroke-opacity: 0.4;
  d: path("m11 9l-3 3l3 3m-3-3h8");
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
</style><g class="nrj6p8qat"><path class="gvxognb3s"/><path class="j_psw1y4g"/></g>`,
		"fallback": "coolicons:square-arrow-left-duocolor-sharp",
	});
}

export default Component;
