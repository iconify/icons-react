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
		"content": `<style>.aszgusblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.86 12a15.51 15.51 0 1 1-19.77.05L9.83 7.83a21.5 21.5 0 1 0 28.34 0Z");
}

.o1_-ibc6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.1 2.5h5.8V24h-5.8z");
}
</style><path class="aszgusblo"/><path class="o1_-ibc6k"/>`,
		"fallback": "arcticons:powerapp",
	});
}

export default Component;
