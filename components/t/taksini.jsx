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
		"content": `<style>.y86rq3bow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.1 12.3h-7.8V4.5h23.4v7.8h-7.8v23.4H12.3v7.795h7.8z");
}
</style><path class="y86rq3bow"/>`,
		"fallback": "arcticons:taksini",
	});
}

export default Component;
