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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.k4wsj4uzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.5 16.644v14.704h7.101m9.434-1.848c-.612 1.109-1.764 1.856-3.085 1.856c-1.961 0-3.55-1.646-3.55-3.676v-2.39c0-2.03 1.589-3.675 3.55-3.675s3.55 1.646 3.55 3.676v1.194h-7.1");
}
</style><path class="k4wsj4uzd"/><path class="g2wj9jbhp"/>`,
		"fallback": "arcticons:letters-icon-pack",
	});
}

export default Component;
