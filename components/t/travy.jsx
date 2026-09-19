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
		"content": `<style>.ot3avac5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.422 32.075c6.308-6.308 6.308-16.536 0-22.844s-16.536-6.308-22.844 0s-6.308 16.536 0 22.844a16.2 16.2 0 0 0 3.223 2.496l6.116-6.115a8.076 8.076 0 1 1 7.794-2.092L18.289 37.786L24 43.497z");
}
</style><path class="ot3avac5p"/>`,
		"fallback": "arcticons:travy",
	});
}

export default Component;
