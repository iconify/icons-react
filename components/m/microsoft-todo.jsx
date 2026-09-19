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
		"content": `<style>.nr574hhkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.66 16.49l7.5 7.5L35.38 8.77L43 16.39L20.17 39.23L5 24.06Zm-.12 15.12l7.62-7.62");
}
</style><path class="nr574hhkf"/>`,
		"fallback": "arcticons:microsoft-todo",
	});
}

export default Component;
