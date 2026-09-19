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
		"content": `<style>.f5jei3vpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.844 4.5h11.103v31.443h15.209L35.103 43.5H11.871l4.198-7.557V12.337zm3.072 4.608v30.71");
}
</style><path class="f5jei3vpc"/>`,
		"fallback": "arcticons:league",
	});
}

export default Component;
