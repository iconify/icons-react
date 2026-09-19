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
		"content": `<style>.n9dhwtbcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.438 34.622H17.903a3.354 3.354 0 0 1 0-6.709h17.889a6.708 6.708 0 0 1 0 13.417H9.972a4.472 4.472 0 0 1-3.873-6.709L20.945 8.906a4.472 4.472 0 0 1 7.746 0l9.037 15.653");
}
</style><path class="n9dhwtbcc"/>`,
		"fallback": "arcticons:sitedocs",
	});
}

export default Component;
