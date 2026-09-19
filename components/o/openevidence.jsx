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
		"content": `<style>.ap5ec8ypu {
  cx: 15.5px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 11px;
  ry: 13px;
}

.xme7cmtwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.5 37h28v-6.5M15.5 11h26v5.5M37 20v7m0-3.5h-8.5m0-12.5v26");
}
</style><ellipse class="ap5ec8ypu"/><path class="xme7cmtwy"/>`,
		"fallback": "arcticons:openevidence",
	});
}

export default Component;
