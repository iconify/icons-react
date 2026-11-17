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
		"content": `<style>.n0uo4wbqj {
  d: path("M3 4h18v6H3Zm6 16H3v-6h6M7 7h.01M7 17h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pnd60nbcx {
  stroke-opacity: 0.4;
  d: path("M13 17h8");
}
</style><g class="nrj6p8qat"><path class="pnd60nbcx"/><path class="n0uo4wbqj"/></g>`,
		"fallback": "coolicons:server-minus-corner-duocolor-sharp",
	});
}

export default Component;
