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
		"content": `<style>.byflq7tpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 36.724l5.377-8.89l6.305 8.89l9.216-15.237l2.466 15.237l15.264-25.235");
}

.g110113rk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 21.645l-.38-10.369l-9.017 4.793");
}
</style><path class="g110113rk"/><path class="byflq7tpi"/>`,
		"fallback": "arcticons:ks-trade-plus",
	});
}

export default Component;
