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
		"content": `<style>.tujnco5pg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 16L2 16L2 4ZM12 16L12 20M7 20L17 20");
}
</style><path class="tujnco5pg"/>`,
		"fallback": "keyline-icons:monitor-sharp",
	});
}

export default Component;
