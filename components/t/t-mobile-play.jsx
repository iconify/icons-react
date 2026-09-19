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
		"content": `<style>.k7o5vnbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.849 16.303L18.84 9.369v13.868z");
}

.rqdy_8xcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.54 4.5H10.658v39h8.21V28.105h6.672c6.518 0 11.802-5.284 11.802-11.802S32.058 4.5 25.54 4.5");
}
</style><path class="rqdy_8xcz"/><path class="k7o5vnbzg"/>`,
		"fallback": "arcticons:t-mobile-play",
	});
}

export default Component;
