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
		"content": `<style>.k1s2zvbhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5h37m0-37h-37m9.179 6.007v24.958m19.642.042L19.139 23.986l15.182-12.437");
}
</style><path class="k1s2zvbhf"/>`,
		"fallback": "arcticons:k-ruoka",
	});
}

export default Component;
