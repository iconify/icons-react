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
		"content": `<style>.puruqy1ne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30 8.254l13.5 31.492H32.247L24 21.754l-8.247 17.992H4.5L18 8.254z");
}
</style><path class="puruqy1ne"/>`,
		"fallback": "arcticons:trading-212",
	});
}

export default Component;
