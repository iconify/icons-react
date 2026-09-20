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
		"content": `<style>.y6kb7nbgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5S2.5 35.874 2.5 24C2.506 12.128 12.128 2.506 24 2.5m-.005 21.545h17.244M23.995 6.802v17.244m12.194-12.194L23.996 24.045");
}
</style><path class="y6kb7nbgh"/>`,
		"fallback": "arcticons:untis-mobile-alt",
	});
}

export default Component;
