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
		"content": `<style>.o8lfg790g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 35.29l11.909-10.94L4.5 12.71m16.519 22.58H43.5");
}
</style><path class="o8lfg790g"/>`,
		"fallback": "arcticons:trebedit",
	});
}

export default Component;
