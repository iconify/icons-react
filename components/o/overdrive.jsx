import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iq23nabct {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 19.81px;
  ry: 16.06px;
}
</style><ellipse transform="rotate(-17.79 24.002 23.984)" class="iq23nabct"/>`,
		"fallback": "arcticons:overdrive",
	});
}

export default Component;
