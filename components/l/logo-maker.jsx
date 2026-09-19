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
		"content": `<style>.x54zyqh8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 13.173V34.82h13.448M7.249 13.173V34.82m15.011.007V18.07l12.086 16.756M22.168 13.298l15.665 21.527m-4.999-6.869L43.5 13.298v21.527");
}
</style><path class="x54zyqh8g"/>`,
		"fallback": "arcticons:logo-maker",
	});
}

export default Component;
