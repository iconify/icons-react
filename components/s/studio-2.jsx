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
		"content": `<style>.rurgsgb0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.296 4.5L12.704 16.936v9.948l22.592-12.435zm0 16.616L12.704 33.551V43.5l22.592-12.436zm-9.065-1.677l9.065 1.677M24.23 27.207l-11.526-.323");
}
</style><path class="rurgsgb0e"/>`,
		"fallback": "arcticons:studio-2",
	});
}

export default Component;
