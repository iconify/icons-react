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
		"content": `<style>.wn28j85qk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 8.076h-9.367v20.14l-14.05-20.14H5.5l22.481 31.848H42.5z");
}
</style><path class="wn28j85qk"/>`,
		"fallback": "arcticons:vaulty",
	});
}

export default Component;
