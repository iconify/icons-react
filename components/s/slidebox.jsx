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
		"content": `<style>.amhwl3acz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.586 6.086l-16.5 16.5a2 2 0 0 0 0 2.828l16.5 16.5a2 2 0 0 0 2.828 0l16.5-16.5a2 2 0 0 0 0-2.828l-16.5-16.5a2 2 0 0 0-2.828 0");
}
</style><path class="amhwl3acz"/>`,
		"fallback": "arcticons:slidebox",
	});
}

export default Component;
