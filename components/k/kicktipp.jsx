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
		"content": `<style>.bzvq31dhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.931 20.272h6.458m-3.23-4.731v17.062c0 1.583 1.378 2.867 3.076 2.867h.923M16.39 27.308l8.753 8.128m-12.298-4.84L23.98 20.264M12.843 12.53v22.94M9.5 5.5h29c2.216 0 4 1.785 4 4v29c0 2.217-1.784 4-4 4h-29a3.99 3.99 0 0 1-4-3.98V9.5c0-2.215 1.784-4 4-4");
}
</style><path class="bzvq31dhf"/>`,
		"fallback": "arcticons:kicktipp",
	});
}

export default Component;
