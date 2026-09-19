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
		"content": `<style>.px5e_cegu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.28 12.994v30.362c0 .08-.064.144-.144.144H24.77a5.05 5.05 0 0 1-5.05-5.049V12.994a.144.144 0 0 0-.144-.144H9.19a.144.144 0 0 1-.144-.145V9.55a5.05 5.05 0 0 1 5.049-5.05H38.81c.08.001.144.066.144.145V7.8a5.05 5.05 0 0 1-5.049 5.05h-5.481a.144.144 0 0 0-.145.144Z");
}
</style><path class="px5e_cegu"/>`,
		"fallback": "arcticons:tecno-spot",
	});
}

export default Component;
