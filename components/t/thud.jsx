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
		"content": `<style>.ytwa_990s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.901h39m-39 7.62h23.618M4.5 27.526h32.516M4.5 35.099h37.296");
}
</style><path class="ytwa_990s"/>`,
		"fallback": "arcticons:thud",
	});
}

export default Component;
