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

.g6dkrcn8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24H7.5l4.125-7.145h6.188l-1.65 2.858h4.125L26.063 9.71h6.187zm0 0l8.25-14.289l4.125 7.145l-3.094 5.358l-1.65-2.858l-2.062 3.573l5.775 10.003l-3.094 5.358z");
}

.xonmevo2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 24l8.25 14.289H24l-3.094-5.358h3.3l-2.062-3.573h-11.55L7.5 24z");
}
</style><circle class="cpk0fnbgt"/><path class="g6dkrcn8b"/><path class="xonmevo2m"/>`,
		"fallback": "arcticons:jlab",
	});
}

export default Component;
