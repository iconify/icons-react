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
		"content": `<style>.uxc_w6bqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.066 20.999c12.682 3.01 5.453 14.411-14.055 11.591L37.74 7.464c9.132 7.589 10.384 21.144 2.796 30.276S19.393 48.124 10.26 40.536S-.124 19.393 7.464 10.261a21.5 21.5 0 0 1 24.98-6.033");
}
</style><path class="uxc_w6bqs"/>`,
		"fallback": "arcticons:ireal-pro",
	});
}

export default Component;
