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
		"content": `<style>.ek1lxhw8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.642 12.193V6.324L40.899 5.5v17.292h-3.277");
}

.kflc-nz8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.743 17.729v23.827L7.101 38.279V19.376l15.108-.898zM25.489 42.5l-11.145-1.319");
}

.nvt5hw_yp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.72 32.417v-9.421l7.137 9.681zm4.672 4.412l-1.348-4.291m3.165-14.06V12.47l7.433-.277l7.98-.306v20.088h-2.879");
}
</style><path class="kflc-nz8w"/><path class="nvt5hw_yp"/><path class="ek1lxhw8x"/>`,
		"fallback": "arcticons:spacedesk",
	});
}

export default Component;
