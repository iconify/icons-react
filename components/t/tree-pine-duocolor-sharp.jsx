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
		"content": `<style>.j0ig87b_y {
  d: path("m12 3l5 4h-3l5 5h-4l6 6H3l6-6H5l5-5H7z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe7_vcbri {
  stroke-opacity: 0.4;
  d: path("M12 18v3");
}
</style><g class="nrj6p8qat"><path class="oe7_vcbri"/><path class="j0ig87b_y"/></g>`,
		"fallback": "coolicons:tree-pine-duocolor-sharp",
	});
}

export default Component;
