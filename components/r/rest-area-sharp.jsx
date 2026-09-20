import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqn4febli {
  fill: currentColor;
  d: path("M5.827 21v-2H3.942v-1h4.77v1H6.827v2zm5.673 0v-5.384H7.712v-1h8.557v1H12.5V21zm5.673 0v-2h-1.904v-1h4.789v1h-1.885v2zM3 15.616V3h18v12.616h-2.346v-1H20v-2.372l-5.142-4.298l-3.794 3.795l-3.089-2.858L4 12.219v2.397h1.327v1z");
}
</style><path class="dqn4febli"/>`,
		"fallback": "material-symbols-light:rest-area-sharp",
	});
}

export default Component;
