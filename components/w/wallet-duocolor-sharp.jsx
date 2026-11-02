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
		"content": `<style>.jbutoqb1r {
  stroke-opacity: 0.4;
  d: path("M21 9h-6v6h6m-3-3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}
</style><g class="nrj6p8qat"><path class="jbutoqb1r"/><path class="w7mc2oblu"/></g>`,
		"fallback": "coolicons:wallet-duocolor-sharp",
	});
}

export default Component;
