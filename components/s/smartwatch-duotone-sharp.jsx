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
		"content": `<style>.a4h3s8qno {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h12v12H6Zm3 0V3h6v3M9 18v3h6v-3");
}

.ft5dv1b6b {
  fill: none;
}

.jd4-llbsy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 6h12v12H6Z");
}
</style><g class="ft5dv1b6b"><path class="jd4-llbsy"/><path class="a4h3s8qno"/></g>`,
		"fallback": "coolicons:smartwatch-duotone-sharp",
	});
}

export default Component;
