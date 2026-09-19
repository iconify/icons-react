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
		"content": `<style>.ib-65u9jo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 8.766L24 39.234L4.5 8.766h13.406L24 18.516l6.094-9.75");
}
</style><path class="ib-65u9jo"/>`,
		"fallback": "arcticons:veganradar",
	});
}

export default Component;
