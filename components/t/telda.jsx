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
		"content": `<style>.bedqhrm4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 19.1c0 5.412-4.388 9.8-9.8 9.8c-6.018 0-7.842-3.164-9.7-4.9s-3.682-4.9-9.7-4.9c-5.412 0-9.8 4.388-9.8 9.8");
}
</style><path class="bedqhrm4x"/>`,
		"fallback": "arcticons:telda",
	});
}

export default Component;
