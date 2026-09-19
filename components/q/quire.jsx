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
		"content": `<style>.ckbus-mzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.338 36.908a17.108 17.108 0 1 1 4.904-23.692");
}

.sk6ofjbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.302 21.099c-.16 8.45 20.036 7.827 18.81 21.401");
}

.t_u7axbqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.243 13.216a17.11 17.11 0 0 1-.117 18.971");
}
</style><path class="ckbus-mzh"/><path class="sk6ofjbop"/><path class="t_u7axbqw"/>`,
		"fallback": "arcticons:quire",
	});
}

export default Component;
