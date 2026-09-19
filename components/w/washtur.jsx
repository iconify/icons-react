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
		"content": `<style>.gapeh-bbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 11h30m-24.83 8.617a12 12 0 0 1 19.66 0m2.08 5.421a12 12 0 1 1-23.893.834");
}

.mg5p3acld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.426 18.963s-1.575.13-2.352.76c-1.172.947-5.025 9.377-6.5 9.345C28.89 29.031 27.731 23.901 24 24M8.574 18.963s1.575.13 2.352.759c1.172.948 5.025 9.378 6.5 9.346C19.11 29.03 20.269 23.9 24 24");
}

.uhx3m_1tm {
  width: 31px;
  height: 39px;
  x: 8.5px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="uhx3m_1tm"/><path class="gapeh-bbt"/><path class="mg5p3acld"/>`,
		"fallback": "arcticons:washtur",
	});
}

export default Component;
