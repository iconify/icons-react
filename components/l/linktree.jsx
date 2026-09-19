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
		"content": `<style>.nl77v4m4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.126 20.084h31.748M12.775 8.859l22.45 22.45m-22.45 0l22.45-22.45M24 20.098V4.21m.002 25.942V43.5");
}
</style><path class="nl77v4m4p"/>`,
		"fallback": "arcticons:linktree",
	});
}

export default Component;
