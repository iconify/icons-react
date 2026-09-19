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
		"content": `<style>.aj5p9tbck {
  cx: 34.5px;
  cy: 13.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kf6-t6vzx {
  cx: 13.5px;
  cy: 34.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w5c1w6fzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.5 21.5h-16v-16c8.837 0 16 7.163 16 16c0 1.38 1.12 2.5 2.5 2.5s2.5 1.12 2.5 2.5c0 8.837 7.163 16 16 16v-16h-16");
}
</style><circle class="aj5p9tbck"/><circle class="kf6-t6vzx"/><path class="w5c1w6fzn"/>`,
		"fallback": "arcticons:nyon-material-you-icons",
	});
}

export default Component;
