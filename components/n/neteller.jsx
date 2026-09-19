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
		"content": `<style>.f7wg1_8bp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.5 11l-13 13l13 13l13-13zm13 0v26l13-13z");
}
</style><path class="f7wg1_8bp"/>`,
		"fallback": "arcticons:neteller",
	});
}

export default Component;
