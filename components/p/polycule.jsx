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
		"content": `<style>.aeexfbztz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 12h6l-6.75 12l3.9 6.975L28.35 12h6.15l6.75 12l-6.75 12h-6l6.75-12l-3.9-6.9L19.725 36h-6.3L6.75 24z");
}
</style><path class="aeexfbztz"/>`,
		"fallback": "arcticons:polycule",
	});
}

export default Component;
