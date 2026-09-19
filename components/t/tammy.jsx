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
		"content": `<style>.b38av5bht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.822 25.65L25.65 44.819a2.33 2.33 0 0 1-3.302 0L3.18 25.651zm-41.643-3.3l19.17-19.168a2.33 2.33 0 0 1 3.302 0l19.17 19.167z");
}
</style><path class="b38av5bht"/>`,
		"fallback": "arcticons:tammy",
	});
}

export default Component;
