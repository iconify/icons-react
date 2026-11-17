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

.v_xeet77x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21c-3-2-7-6-7-11a7 7 0 1 1 14 0c0 5-4 9-7 11");
}

.wlzixcuap {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21c-3-2-7-6-7-11a7 7 0 0 1 14 0c0 5-4 9-7 11m1-14l-3 3h4l-3 3");
}
</style><g class="ft5dv1b6b"><path class="v_xeet77x"/><path class="wlzixcuap"/></g>`,
		"fallback": "coolicons:map-pin-zap-duotone-sharp",
	});
}

export default Component;
