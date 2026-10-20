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
		"content": `<style>.u723e3b5i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3L2 3L2 17L22 17L22 12M12 17L12 21M7 21L17 21M19 2L19 9M15.7071 5.7071L19 9L22.2929 5.7071");
}
</style><path class="u723e3b5i"/>`,
		"fallback": "keyline-icons:monitor-2-arrow-down-sharp",
	});
}

export default Component;
