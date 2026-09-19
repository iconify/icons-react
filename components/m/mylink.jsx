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
		"content": `<style>.u-ksgwy8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.023 20.334a8.172 8.172 0 1 1 .523 8.227m-.061-.092l-5.595-9.69m-2.913 8.887a8.172 8.172 0 1 1-.523-8.227m.061.092l5.595 9.69");
}
</style><path class="u-ksgwy8z"/>`,
		"fallback": "arcticons:mylink",
	});
}

export default Component;
