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
		"content": `<style>.s1mdg72rx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.056 5.5H42.5v24a13 13 0 0 1-13 13h-3.444h0v-24a13 13 0 0 1 13-13M5.5 26.056h3.444a13 13 0 0 1 13 13V42.5h0H18.5a13 13 0 0 1-13-13z");
}
</style><path class="s1mdg72rx"/>`,
		"fallback": "arcticons:jottacloud",
	});
}

export default Component;
