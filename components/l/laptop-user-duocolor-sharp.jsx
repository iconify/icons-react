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
		"content": `<style>.cujuvbc8z {
  d: path("M5 16V4h14v12M3 16h18v4H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u9vuhcqdv {
  stroke-opacity: 0.4;
  d: path("M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-1 7c0-1.105 1.343-2 3-2s3 .895 3 2");
}
</style><g class="nrj6p8qat"><path class="u9vuhcqdv"/><path class="cujuvbc8z"/></g>`,
		"fallback": "coolicons:laptop-user-duocolor-sharp",
	});
}

export default Component;
