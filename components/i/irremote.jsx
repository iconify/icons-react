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
		"content": `<style>.coldmlbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 8.887a21.5 21.5 0 1 0 30.406 0M24 24.09V2.594");
}
</style><path class="coldmlbgi"/>`,
		"fallback": "arcticons:irremote",
	});
}

export default Component;
