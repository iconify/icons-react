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
		"content": `<style>.ys59mc-zr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.21 43.5L21.627 28.918H11.79v-9.836h9.837L36.209 4.5z");
}
</style><path class="ys59mc-zr"/>`,
		"fallback": "arcticons:mutereminder",
	});
}

export default Component;
