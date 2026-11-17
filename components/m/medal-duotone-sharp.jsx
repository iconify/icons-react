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
		"content": `<style>.e0lzhpbfo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0m2-4L6 3h4l2 4l2-4h4l-3 9");
}

.ft5dv1b6b {
  fill: none;
}

.l_haiwu4q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 3h4l2 4l2-4h4l-3 9a4.999 4.999 0 1 1-7.743 5.581A5 5 0 0 1 9 12Zm3 9h6a5 5 0 0 0-6 0");
}
</style><g class="ft5dv1b6b"><path class="l_haiwu4q"/><path class="e0lzhpbfo"/></g>`,
		"fallback": "coolicons:medal-duotone-sharp",
	});
}

export default Component;
