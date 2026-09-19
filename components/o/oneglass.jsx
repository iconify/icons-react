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
		"content": `<style>.flokdkbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 23.947l-9.765 16.914l-9.705-16.808l9.766-16.914z");
}

.yotsq06rd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.735 40.861H14.204L4.5 24.053h19.53zM24.03 24.053H4.5l9.765-16.914h19.531z");
}
</style><path class="yotsq06rd"/><path class="flokdkbhv"/>`,
		"fallback": "arcticons:oneglass",
	});
}

export default Component;
