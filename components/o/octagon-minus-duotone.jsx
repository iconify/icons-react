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
		"content": `<style>.enxd0lbyq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h3c.64 0 1.36.36 2 1l3 3c.64.64 1 1.36 1 2v6c0 .64-.36 1.36-1 2l-3 3c-.64.64-1.36 1-2 1H9c-.64 0-1.36-.36-2-1l-3-3c-.64-.64-1-1.36-1-2V9c0-.64.36-1.36 1-2l3-3c.64-.64 1.36-1 2-1zm-4 9h8");
}

.ft5dv1b6b {
  fill: none;
}

.kwnr84g-f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 3c.763 0 1.479.48 2 1l3 3c.52.521 1 1.237 1 2v6c0 .763-.48 1.479-1 2l-3 3c-.521.52-1.237 1-2 1H9c-.763 0-1.479-.48-2-1l-3-3c-.52-.521-1-1.237-1-2V9c0-.763.48-1.479 1-2l3-3c.521-.52 1.237-1 2-1Z");
}
</style><g class="ft5dv1b6b"><path class="kwnr84g-f"/><path class="enxd0lbyq"/></g>`,
		"fallback": "coolicons:octagon-minus-duotone",
	});
}

export default Component;
