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
		"content": `<style>.j1n_90bkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 28.71l8.646-20.854a3.82 3.82 0 0 1 7.055 2.925L27.527 40.143");
}

.us8cyeb-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.001 42.5a3.82 3.82 0 0 1-3.528-2.357L8.299 10.781a3.82 3.82 0 0 1 7.055-2.925l12.173 29.362a3.82 3.82 0 0 1-3.526 5.282");
}
</style><path class="us8cyeb-l"/><path class="j1n_90bkg"/>`,
		"fallback": "arcticons:vaux-editor",
	});
}

export default Component;
