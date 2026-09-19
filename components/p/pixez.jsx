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
		"content": `<style>.ey53vhpae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.55 6.84h9.4v34.32h-9.4zm14.45 0a12.51 12.51 0 0 1 0 25");
}
</style><path class="ey53vhpae"/>`,
		"fallback": "arcticons:pixez",
	});
}

export default Component;
