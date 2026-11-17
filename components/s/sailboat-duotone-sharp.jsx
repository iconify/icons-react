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
		"content": `<style>.bkww2i2ry {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 12H9V3Z");
}

.ft5dv1b6b {
  fill: none;
}

.jx-ijvbol {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 17l-1-5h18l-1 5M9 3v9m0-9l9 9H9zM2 20c.5.5 1 1 2 1c2 0 2-2 4-2s2 2 4 2s2-2 4-2s2 2 4 2c1 0 1.5-.5 2-1");
}
</style><g class="ft5dv1b6b"><path class="bkww2i2ry"/><path class="jx-ijvbol"/></g>`,
		"fallback": "coolicons:sailboat-duotone-sharp",
	});
}

export default Component;
