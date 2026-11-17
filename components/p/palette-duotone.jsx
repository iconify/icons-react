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
		"content": `<style>.f6uqonbwq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 16h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9a4 4 0 0 1-4 4");
}

.ft5dv1b6b {
  fill: none;
}

.o1nlj2b_t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21a9 9 0 1 1 9-9a4 4 0 0 1-4 4h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1m-5-9h.01M9 8h.01M14 7h.01M17 11h.01");
}
</style><g class="ft5dv1b6b"><path class="f6uqonbwq"/><path class="o1nlj2b_t"/></g>`,
		"fallback": "coolicons:palette-duotone",
	});
}

export default Component;
