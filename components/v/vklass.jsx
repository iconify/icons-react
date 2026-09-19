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
		"content": `<style>.t7q1w9btz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.375h9.75l9.75 19.5h-9.75Zm39 0h-9.75L24 28.875l4.875 9.75Z");
}
</style><path class="t7q1w9btz"/>`,
		"fallback": "arcticons:vklass",
	});
}

export default Component;
