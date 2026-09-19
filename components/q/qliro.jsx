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
		"content": `<style>.fxnlhybdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.495 31.248H35.5a9 9 0 0 0 9-9h0a9 9 0 0 0-9-9h-23a9 9 0 0 0-9 9h0a9 9 0 0 0 9 9h8.176c.848 0 1.66.337 2.26.936l2.569 2.568");
}
</style><path class="fxnlhybdd"/>`,
		"fallback": "arcticons:qliro",
	});
}

export default Component;
