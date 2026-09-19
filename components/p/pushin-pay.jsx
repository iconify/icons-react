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
		"content": `<style>.ptcij1b7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 30.167V42.5c6.812 0 12.333-5.522 12.333-12.333s-5.522-12.333-12.333-12.333H5.5c0 6.812 5.522 12.333 12.333 12.333h12.333c6.811 0 12.333-5.522 12.333-12.333S36.977 5.501 30.166 5.501H17.833v12.333");
}
</style><path class="ptcij1b7m"/>`,
		"fallback": "arcticons:pushin-pay",
	});
}

export default Component;
