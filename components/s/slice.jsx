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
		"content": `<style>.mjmpbxbtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30.5a13 13 0 1 0-13-13h13Zm0 13a13 13 0 0 1-13-13h13Z");
}
</style><path class="mjmpbxbtu"/>`,
		"fallback": "arcticons:slice",
	});
}

export default Component;
