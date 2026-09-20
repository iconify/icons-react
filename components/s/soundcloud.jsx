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
		"content": `<style>.p-rzr8k9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30v3.26h14.42a5.08 5.08 0 0 0 0-10.16a5 5 0 0 0-1.56.27v-.27A8.3 8.3 0 0 0 24 16.17ZM4.5 24.34v6.46m2.78-8.81v10.46m2.78-9.7v10.48m2.78 0V19.9m2.78-1.01v14.34m2.78 0V19.9m2.78-1.94v15.27");
}
</style><path class="p-rzr8k9i"/>`,
		"fallback": "arcticons:soundcloud",
	});
}

export default Component;
