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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.gz7fr7b8h {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v4H3V3h11v4m4 8l3-3m0 0l-3-3m3 3H11");
}

.lys7u0b4h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h11v18H3Z");
}
</style><g class="ft5dv1b6b"><path class="lys7u0b4h"/><path class="gz7fr7b8h"/></g>`,
		"fallback": "coolicons:log-out-duotone-sharp",
	});
}

export default Component;
