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
		"content": `<style>.gsrdj4b8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3L3 21M15 3L21 21M6 6L18 6M4 12L20 12M2 18L22 18");
}
</style><path class="gsrdj4b8c"/>`,
		"fallback": "keyline-icons:train-track",
	});
}

export default Component;
