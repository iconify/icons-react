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
		"content": `<style>.ppq7xyhiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 13L19.13 37.47a2.23 2.23 0 0 1-3.17 0L4.5 26.08");
}
</style><path class="ppq7xyhiz"/>`,
		"fallback": "arcticons:simpletask",
	});
}

export default Component;
