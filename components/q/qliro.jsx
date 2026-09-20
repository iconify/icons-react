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
		"content": `<style>.jumkp8bss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.495 31.248H35.5a9 9 0 1 0 0-18h-23a9 9 0 1 0 0 18h8.176c.848 0 1.66.337 2.26.936l2.569 2.568");
}
</style><path class="jumkp8bss"/>`,
		"fallback": "arcticons:qliro",
	});
}

export default Component;
