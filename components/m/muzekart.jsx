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
		"content": `<style>.fv-3rdb6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 24h4v18.5h-4z");
}

.qt5xlgb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.5 42.5v-37L25 24L8.5 5.5V24");
}
</style><path class="qt5xlgb9e"/><path class="fv-3rdb6a"/>`,
		"fallback": "arcticons:muzekart",
	});
}

export default Component;
