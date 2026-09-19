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
		"content": `<style>.vnzh7pboe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.666 24c0 6.612-5.184 11.973-11.58 11.975S4.503 30.62 4.5 24.007S9.678 12.03 16.074 12.025c6.396-.006 11.585 5.35 11.592 11.962zm3.253-11.524c5.915 5.334 5.924 17.998 0 23.109m8.141-23.109c5.915 5.334 5.925 17.998 0 23.109");
}
</style><path class="vnzh7pboe"/>`,
		"fallback": "arcticons:mytango",
	});
}

export default Component;
