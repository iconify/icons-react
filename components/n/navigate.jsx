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
		"content": `<style>.b101edwzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.036 16.206C10.346 9.808 16.552 5.5 24.004 5.5S37.66 9.808 40.97 16.206");
}

.t45u9qbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.093 21.408l17.911-8.47l17.911 8.47M7.217 24.802v14.136M29.6 24.802v14.136M18.408 24.802v14.136m22.383-14.136v14.136M6.077 42.5h35.846");
}
</style><path class="b101edwzr"/><path class="t45u9qbdb"/>`,
		"fallback": "arcticons:navigate",
	});
}

export default Component;
