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
		"content": `<style>.igy0zughn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 23.699L24 8.781l18.5 14.918");
}

.ulztkdbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.868 14.75v24.47h8.952v-8.953h8.356v8.952h8.952V19.526");
}
</style><path class="ulztkdbrc"/><path class="igy0zughn"/>`,
		"fallback": "arcticons:simplelauncher",
	});
}

export default Component;
