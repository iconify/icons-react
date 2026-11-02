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
		"content": `<style>.ek06zebyj {
  d: path("M3 6V5a2 2 0 0 1 2-2h1m12 0h1a2 2 0 0 1 2 2v1m0 12v1a2 2 0 0 1-2 2h-1M10 3h4m7 7v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p_8s37hao {
  stroke-opacity: 0.4;
  d: path("M3 12a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="nrj6p8qat"><path class="p_8s37hao"/><path class="ek06zebyj"/></g>`,
		"fallback": "coolicons:square-dashed-square-duocolor",
	});
}

export default Component;
