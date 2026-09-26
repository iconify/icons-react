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
		"content": `<style>.hy3jeobtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 4L2 10L8 16M2 10L18 10C20.2091 10 22 11.7909 22 14L22 20");
}
</style><path class="hy3jeobtt"/>`,
		"fallback": "keyline-icons:reply",
	});
}

export default Component;
