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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ki6nuxy0u {
  stroke-linejoin: round;
  d: path("M12 3H8C6.11438 3 5.17157 3 4.58579 3.58579C4 4.17157 4 5.11438 4 7V7.95M12 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V7.95M12 3V15V21M12 21H7M12 21H17");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.y0cxd-7om {
  d: path("M4 12H20");
}
</style><g class="ipq1z-bjh"><path class="ki6nuxy0u"/><path class="y0cxd-7om"/></g>`,
		"fallback": "solar:text-cross-line-duotone",
	});
}

export default Component;
