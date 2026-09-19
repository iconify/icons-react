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
		"content": `<style>.ip-59rbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.214 12.536L4.5 29.733v5.732h11.143l22.286-22.93H43.5v22.93H26.786v-22.93z");
}
</style><path class="ip-59rbek"/>`,
		"fallback": "arcticons:transport-gzm",
	});
}

export default Component;
