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

.tjg11cc-t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 11c.001-1.348 1.478-2.357 2.553-2.894l4-2A1 1 0 0 1 11 6h2c.155 0 .308.036.447.106l4 2C18.522 8.643 19.999 9.652 20 11v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z");
}

.xjcr95b1m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V11c0-.613.774-1.387 2-2l4-2h2l4 2c1.226.613 2 1.387 2 2v10M9 21v-8h6v8m-6-4h6");
}
</style><g class="ft5dv1b6b"><path class="tjg11cc-t"/><path class="xjcr95b1m"/></g>`,
		"fallback": "coolicons:warehouse-duotone",
	});
}

export default Component;
