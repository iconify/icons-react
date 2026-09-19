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
		"content": `<style>.z6iqiv9mf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.082 4.5v22.757a8.77 8.77 0 0 0-4.388-1.178c-4.83 0-8.745 3.9-8.744 8.712c0 4.81 3.916 8.71 8.744 8.709c4.407-.005 8.698-3.245 8.704-8.173l.028-22.163h8.624V4.5z");
}
</style><path class="z6iqiv9mf"/>`,
		"fallback": "arcticons:music-alt-1",
	});
}

export default Component;
