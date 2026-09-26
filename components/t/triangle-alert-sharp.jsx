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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ju8v6k8zc {
  fill: currentColor;
  d: path("M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z");
  stroke: none;
}

.lu9u9u8wt {
  d: path("M12 3L2 21L22 21L12 3Z");
}

.qf7tbcbyb {
  d: path("M12 10L12 14");
}
</style><g class="gp_8x1bzb"><path class="lu9u9u8wt"/><path class="qf7tbcbyb"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:triangle-alert-sharp",
	});
}

export default Component;
