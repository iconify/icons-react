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
		"content": `<style>.tpnmsocbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.89 5.197L6.8 21.734a2 2 0 0 0-1.127 1.8v18.33a1 1 0 0 0 1.456.89l14.654-7.504l6.158 4.728l4.033-10.372l9.393-5.734a2 2 0 0 0 .958-1.707V6.097a1 1 0 0 0-1.437-.9");
}
</style><path class="tpnmsocbo"/>`,
		"fallback": "arcticons:twist",
	});
}

export default Component;
