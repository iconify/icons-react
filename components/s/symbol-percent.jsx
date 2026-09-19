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

.j_3goac7u {
  cx: 18.439px;
  cy: 17.048px;
  r: 4.171px;
}

.pv3njmaji {
  cx: 29.561px;
  cy: 30.952px;
  r: 4.171px;
}

.wf58rmbpf {
  d: path("m16.766 35.123l14.46-22.246");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="j_3goac7u"/><circle class="pv3njmaji"/><path class="wf58rmbpf"/></g><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:symbol-percent",
	});
}

export default Component;
