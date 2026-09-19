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
		"content": `<style>.j3s9ivbxi {
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

.mzq_7zbob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.5 25.327l10.127 5.853L10.5 37.032m22 0H21.673");
}

.usy8zkb4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.885 8.5h8.45c.643 0 1.165.686 1.165 1.533v7.715c0 .847-.522 1.533-1.165 1.533h-8.45c-.644 0-1.166-.686-1.166-1.533v-7.715c0-.847.522-1.533 1.166-1.533m-.989 12.783H39.5");
}
</style><path class="mzq_7zbob"/><rect class="j3s9ivbxi"/><path class="usy8zkb4p"/>`,
		"fallback": "arcticons:termux-gui",
	});
}

export default Component;
