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
		"content": `<style>.rmvh42bgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6L6 8c-1.107.369-.476 2.262 1 3l2 1a6.7 6.7 0 0 1 3 3l1 2c.738 1.476 2.631 2.107 3 1l4-12c.412-1.236-.764-2.412-2-2zm-1 7l3-3");
}
</style><path class="rmvh42bgf"/>`,
		"fallback": "coolicons:paper-plane-round",
	});
}

export default Component;
