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
		"content": `<style>.l4nen_byf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.408 28.87v4.88h-2.435v2.435h-2.435V33.75h-2.446v2.435h-2.434V33.75h-2.435v2.435h-2.435V33.75h-2.435v2.435h-2.445V33.75h-4.87v2.435h-2.446V28.87h2.446V24h2.435v-4.87h-4.881v-2.445h2.446v-4.87h2.435V9.37h2.435V6.935h2.445V4.5h2.435v4.87h2.435v2.445h2.435v2.435h2.434v4.88H17.908v2.435h2.445V24h2.435v2.435h4.87v-4.87h2.434V24h2.446v2.435h2.435v2.435z");
}

.ty9tihs2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.538 36.185v4.88h-7.315V38.63h-4.87v2.435h-4.88V38.63h-2.435v-2.445z");
}

.xlc8a0k0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.092 19.13v2.435h-2.434v4.87h-4.87V24h-2.435v-2.435h-2.445V19.13zm-4.869 14.62h2.435v2.435h-2.435zm4.869 0h2.445v2.435h-2.445zm-9.739 0h2.435v2.435h-2.435zm-7.315 0h4.87v2.435h-4.87zm2.435 7.315h2.435V43.5h-2.435zm12.185 0h4.88V43.5h-4.88z");
}
</style><path class="l4nen_byf"/><path class="xlc8a0k0r"/><path class="ty9tihs2y"/>`,
		"fallback": "arcticons:monk-tower",
	});
}

export default Component;
