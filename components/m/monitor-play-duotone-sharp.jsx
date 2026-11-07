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
		"content": `<style>.e71wle9zp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v13H4Zm5 16h6M10 7l5 3.5l-5 3.5Z");
}

.ft5dv1b6b {
  fill: none;
}

.o42c4u5zt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 4v13H4V4Z");
}
</style><g class="ft5dv1b6b"><path class="o42c4u5zt"/><path class="e71wle9zp"/></g>`,
		"fallback": "coolicons:monitor-play-duotone-sharp",
	});
}

export default Component;
