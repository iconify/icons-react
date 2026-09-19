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
		"content": `<style>.amy9l7bbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2Zm-11-11l11 11m-20.14 6.47h9.29");
}

.aqsme9b8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.48 22h-3.83l-3.79-6.34a1 1 0 0 0-1.33-.4a1.13 1.13 0 0 0-.39.42L19.36 22h-3.83A1.51 1.51 0 0 0 14 23.5a1.2 1.2 0 0 0 .05.38l2.13 8a1.39 1.39 0 0 0 1.34 1h12.95a1.37 1.37 0 0 0 1.34-1l2.15-8A1.52 1.52 0 0 0 32.89 22a1.4 1.4 0 0 0-.41 0");
}
</style><path class="aqsme9b8i"/><path class="amy9l7bbk"/>`,
		"fallback": "arcticons:shoppinglist",
	});
}

export default Component;
