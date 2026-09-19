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
		"content": `<style>.bsadcx1ki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.451 34.585H38.5m-6.049-21.17H38.5M32.451 24h3.944m-3.944-10.585v21.17m-11.523 0v-21.17l8.015 21.17v-21.17M9.5 30.578a4.007 4.007 0 1 0 8.015 0V17.422a4.007 4.007 0 1 0-8.015 0zm2.007-12.489l2-1.089m0 0v14");
}

.j98an1bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}
</style><path class="bsadcx1ki"/><path class="j98an1bqd"/>`,
		"fallback": "arcticons:one",
	});
}

export default Component;
