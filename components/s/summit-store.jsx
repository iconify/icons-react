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
		"content": `<style>.c1igrv8-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 28h2.25a8.25 8.25 0 0 0 8.25-8.25V11.5h-8.25A8.25 8.25 0 0 0 24 19.75V39.5");
}

.du3ymucza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 25h-2.25a5.25 5.25 0 0 1-5.25-5.25V14.5h5.25c1.088 0 2.1.331 2.938.898");
}

.hgsc1gbwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 25h2.25c2.9 0 5.25-2.35 5.25-5.25V14.5h-5.25A5.25 5.25 0 0 0 27 19.75V39.5m-5.299-29.299a11.2 11.2 0 0 0-5.95-1.7H4.5v11.25C4.5 25.962 9.537 31 15.75 31H18");
}

.jzargrbyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 39.5V19.75C21 13.537 26.037 8.5 32.25 8.5H43.5v11.25C43.5 25.963 38.463 31 32.25 31H30");
}

.m313nznpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 28h-2.25a8.25 8.25 0 0 1-8.25-8.25V11.5h8.25c1.523 0 2.95.413 4.174 1.132");
}
</style><path class="jzargrbyc"/><path class="c1igrv8-f"/><path class="hgsc1gbwd"/><path class="m313nznpb"/><path class="du3ymucza"/>`,
		"fallback": "arcticons:summit-store",
	});
}

export default Component;
