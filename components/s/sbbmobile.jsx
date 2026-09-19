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
		"content": `<style>.rb-vgcpoj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.76 14.25L43.5 24l-9.75 9.75m-19.51 0L4.5 24l9.75-9.75M4.5 24h39M24 14.25v19.5");
}
</style><path class="rb-vgcpoj"/>`,
		"fallback": "arcticons:sbbmobile",
	});
}

export default Component;
