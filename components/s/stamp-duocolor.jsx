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
		"content": `<style>.c2y86xyyy {
  d: path("M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm1 7h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qkeh7ubxs {
  stroke-opacity: 0.4;
  d: path("M10 12V8a2.828 2.828 0 1 1 4 0v4");
}
</style><g class="nrj6p8qat"><path class="qkeh7ubxs"/><path class="c2y86xyyy"/></g>`,
		"fallback": "coolicons:stamp-duocolor",
	});
}

export default Component;
