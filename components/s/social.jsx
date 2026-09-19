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
		"content": `<style>.e4mgbcc7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.872 20.299l3.163 6.325l10.54-1.054l-6.324-12.65Z");
}

.qa5nnjb3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.211 37.789A19.5 19.5 0 0 1 24 4.5m13.789 5.711A19.5 19.5 0 0 1 24 43.5");
}

.spbi6cbla {
  cx: 13.196px;
  cy: 39.02px;
  r: 3.162px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wf_l0bouw {
  cx: 34.804px;
  cy: 8.98px;
  r: 3.162px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zmeg4gb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.872 20.299l-4.216 2.108c-1.267.633-1.16 2.95-.527 4.217s2.423 2.741 3.69 2.108l4.216-2.108m-.932.538l2.635 5.27l-2.108 1.054l-2.635-5.27");
}
</style><path class="qa5nnjb3y"/><circle class="wf_l0bouw"/><circle class="spbi6cbla"/><path class="e4mgbcc7j"/><path class="zmeg4gb6v"/>`,
		"fallback": "arcticons:social",
	});
}

export default Component;
