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

.r5ncuxbkn {
  d: path("M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1");
}

.v7o6pxfac {
  stroke-opacity: 0.4;
  d: path("M12 6H7a2 2 0 0 0-2 2v2m4-7l3 3l-3 3");
}
</style><g class="nrj6p8qat"><path class="v7o6pxfac"/><path class="r5ncuxbkn"/></g>`,
		"fallback": "coolicons:rotate-right-duocolor",
	});
}

export default Component;
