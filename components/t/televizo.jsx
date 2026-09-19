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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w1k4slb9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.23 23.934l-15.345-8.859v17.719zm-15.345-8.859L8.515 9.088m10.37 23.706v12.092M34.23 23.934l10.4-6.004");
}
</style><circle class="cpk0fnbgt"/><path class="w1k4slb9y"/>`,
		"fallback": "arcticons:televizo",
	});
}

export default Component;
