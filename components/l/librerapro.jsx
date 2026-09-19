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
		"content": `<style>.kwl6_kbwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.4 6.45v35.1a2 2 0 0 0 1.95 2h2.38V4.5h-2.38A2 2 0 0 0 8.4 6.45M37.65 4.5H34v15.6l-2.92-2l-2.93 2V4.5H12.73v39h24.92a2 2 0 0 0 2-2V6.45a2 2 0 0 0-2-1.95");
}
</style><path class="kwl6_kbwd"/>`,
		"fallback": "arcticons:librerapro",
	});
}

export default Component;
