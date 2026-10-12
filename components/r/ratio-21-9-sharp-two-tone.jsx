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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.iub34obzw {
  d: path("M2 8L22 8L22 16L2 16L2 8Z");
}

.vpl2zac6d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7L22 7C22.5523 7 23 7.4477 23 8L23 16C23 16.5523 22.5523 17 22 17L2 17C1.4477 17 1 16.5523 1 16L1 8C1 7.4477 1.4477 7 2 7Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="vpl2zac6d"/><path class="iub34obzw"/></g>`,
		"fallback": "keyline-icons:ratio-21-9-sharp-two-tone",
	});
}

export default Component;
