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
		"content": `<style>.ei45heb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.016 26.855L19.839 4.5L8.661 26.855m14.033 0L31.016 43.5l8.323-16.645");
}
</style><path class="ei45heb_l"/>`,
		"fallback": "arcticons:strava",
	});
}

export default Component;
