import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gx19hbcgr {
  d: path("M216 64v104a16 16 0 0 1-16 16H40V64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rvs1v25bx {
  d: path("M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16");
}
</style><g class="cuyn6tgcc"><path class="gx19hbcgr"/><path class="rvs1v25bx"/></g>`,
		"fallback": "ph:text-align-left-duotone",
	});
}

export default Component;
