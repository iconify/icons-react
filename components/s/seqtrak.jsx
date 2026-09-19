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
		"content": `<style>.fcw-yesds {
  cx: 35.75px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.kl4omd2ly {
  cx: 35.75px;
  cy: 30.5px;
  r: 0.75px;
  fill: currentColor;
}

.knob1cbkb {
  cx: 24px;
  cy: 24px;
  r: 7.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oezfhmlut {
  cx: 35.75px;
  cy: 17.5px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="knob1cbkb"/><rect class="j3s9ivbxi"/><circle class="fcw-yesds"/><circle class="oezfhmlut"/><circle class="kl4omd2ly"/>`,
		"fallback": "arcticons:seqtrak",
	});
}

export default Component;
