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
		"content": `<style>.jcvgmbc_x {
  stroke-opacity: 0.4;
  d: path("M14 14h3m3 0h.01M14 18v2m4-2h2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yzbanlotk {
  d: path("M4 4h6v6H4Zm10 0h6v6h-6ZM4 14h6v6H4Z");
}
</style><g class="nrj6p8qat"><path class="jcvgmbc_x"/><path class="yzbanlotk"/></g>`,
		"fallback": "coolicons:qr-code-duocolor-sharp",
	});
}

export default Component;
