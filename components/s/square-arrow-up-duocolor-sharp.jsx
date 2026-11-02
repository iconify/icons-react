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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-z7qobzv {
  stroke-opacity: 0.4;
  d: path("m15 11l-3-3l-3 3m3-3v8");
}
</style><g class="nrj6p8qat"><path class="x-z7qobzv"/><path class="j_psw1y4g"/></g>`,
		"fallback": "coolicons:square-arrow-up-duocolor-sharp",
	});
}

export default Component;
