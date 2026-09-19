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

.jj6j8j3jq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 30.483V17.5h13v12.983");
}

.wf2ylvv0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.15 34.341a43 43 0 0 1 37.7 0");
}
</style><circle class="cpk0fnbgt"/><path class="jj6j8j3jq"/><path class="wf2ylvv0h"/>`,
		"fallback": "arcticons:vietinbank-ipay",
	});
}

export default Component;
