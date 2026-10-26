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
		"content": `<style>.foe0ikw_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 22L9.5724 3.4253C9.8262 2.5793 10.6048 2 11.4881 2L12.5119 2C13.3952 2 14.1738 2.5793 14.4276 3.4253L20 22M2 22L22 22M8 8.6667L16 8.6667M6 15.3333L18 15.3333");
}
</style><path class="foe0ikw_r"/>`,
		"fallback": "keyline-icons:traffic-cone",
	});
}

export default Component;
