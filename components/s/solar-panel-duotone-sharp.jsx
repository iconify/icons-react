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
		"content": `<style>.b2c0cbb1t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 5h12l2 8H4Z");
}

.co-zfexns {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5h12l2 8H4Zm6 8v6m-4 0h8M5 9h14m-9-4l-1 8m5-8l1 8");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="b2c0cbb1t"/><path class="co-zfexns"/></g>`,
		"fallback": "coolicons:solar-panel-duotone-sharp",
	});
}

export default Component;
