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
		"content": `<style>.maw78pojq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15 9.5h18v29H15z");
}

.ns8k5lbrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 22.177v8.035");
}

.nv37re0_w {
  cx: 24px;
  cy: 18.538px;
  r: 0.75px;
  fill: currentColor;
}

.zvmzeo_nw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34 4.5H14a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2");
}
</style><path class="zvmzeo_nw"/><path class="maw78pojq"/><circle class="nv37re0_w"/><path class="ns8k5lbrp"/>`,
		"fallback": "arcticons:treble-info",
	});
}

export default Component;
