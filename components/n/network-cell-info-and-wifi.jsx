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
		"content": `<style>.k7n5kzb0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 8.796c-8.396 8.397-8.396 22.01 0 30.407M39.203 8.796a21.5 21.5 0 0 1 0 30.408M33.27 14.73a13.11 13.11 0 0 1 0 18.54M14.73 14.73c-5.12 5.12-5.12 13.42 0 18.54M28.72 24a4.72 4.72 0 0 1-9.44 0a4.72 4.72 0 0 1 9.44 0");
}
</style><path class="k7n5kzb0f"/>`,
		"fallback": "arcticons:network-cell-info-and-wifi",
	});
}

export default Component;
