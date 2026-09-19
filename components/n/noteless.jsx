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
		"content": `<style>.piwbffbqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.51 17.51V5.5H38.5a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4V17.51zM17.509 5.5L5.5 17.509m6 6.099h25m-13.991-9.001H36.5m-25 18.001h15m5.22 0h4.78");
}
</style><path class="piwbffbqx"/>`,
		"fallback": "arcticons:noteless",
	});
}

export default Component;
