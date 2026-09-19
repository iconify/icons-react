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
		"content": `<style>.ua-47zokk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.203 39.203c-7.882 7.882-20.482 8.432-29.021 1.267S-.004 20.801 6.39 11.67S25.096-.191 34.75 5.382M9.521 20.232l10.411 10.486zm30.946-10.053L19.97 30.681zM11.55 18.204l8.76 8.735zm2.028-2.028l8.915 8.857zm8.397 16.584l20.219-20.218M23.957 34.743l19.705-19.457");
}
</style><path class="ua-47zokk"/>`,
		"fallback": "arcticons:trakt",
	});
}

export default Component;
