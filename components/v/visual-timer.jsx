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
		"content": `<style>.a7njutb1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.352 39.202A21.5 21.5 0 1 1 27.15 2.5V24z");
}
</style><path class="a7njutb1p"/>`,
		"fallback": "arcticons:visual-timer",
	});
}

export default Component;
