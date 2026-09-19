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
		"content": `<style>.mdrxxj3cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.779 17.276V5.5l18.336 8.922l18.106-8.79V26");
}

.udfio9i1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.115 42.5L42.22 26l-8.627.067l-9.48 7.937L5.78 17.276v7.74z");
}
</style><path class="mdrxxj3cu"/><path class="udfio9i1y"/>`,
		"fallback": "arcticons:myloft",
	});
}

export default Component;
