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
		"content": `<style>.iqz1plbld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.4 5v14.25l3.2-4.222l3.2 4.222V5M12 43h24a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4");
}
</style><path class="iqz1plbld"/>`,
		"fallback": "arcticons:openlib",
	});
}

export default Component;
