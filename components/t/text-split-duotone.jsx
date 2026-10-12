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
		"content": `<style>.yo1srac_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7L12 7M4 12L12 12M6 17L12 17M12 4L12 20M16 7L18 7M16 12L20 12M16 17L22 17");
}
</style><path class="yo1srac_q"/>`,
		"fallback": "keyline-icons:text-split-duotone",
	});
}

export default Component;
