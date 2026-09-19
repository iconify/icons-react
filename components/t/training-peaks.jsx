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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.im8btacin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.664 14.679h12.35m-9.346 18.642l3.287-18.642m6.081 18.642l3.287-18.642h6.058a5.116 5.116 0 0 1 5.183 6.292a7.796 7.796 0 0 1-7.401 6.291h-6.059");
}
</style><circle class="cpk0fnbgt"/><path class="im8btacin"/>`,
		"fallback": "arcticons:training-peaks",
	});
}

export default Component;
