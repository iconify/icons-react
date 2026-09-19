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
		"content": `<style>.ezeyfdbnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.596 43.301a.994.994 0 0 1-1.192 0C18.46 39.617 7.899 30.866 7.899 20.92a16.105 16.105 0 1 1 32.203 0c0 9.946-10.562 18.697-15.506 22.381");
}

.tvehvtjhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.843 27.35V14.806h4.077a4.234 4.234 0 1 1 0 8.467h-4.077");
}

.zptkxjwhw {
  cx: 24px;
  cy: 21.078px;
  r: 11.729px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="tvehvtjhw"/><circle class="zptkxjwhw"/><path class="ezeyfdbnx"/>`,
		"fallback": "arcticons:parkeren",
	});
}

export default Component;
