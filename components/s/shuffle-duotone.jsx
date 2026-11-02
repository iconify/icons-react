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
		"content": `<style>.yj453kb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3h6v6m0-6L3 21M3 3l6 6m6 12h6v-6m0 6l-6-6");
}
</style><path class="yj453kb5f"/>`,
		"fallback": "coolicons:shuffle-duotone",
	});
}

export default Component;
