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

.di7p7v6vy {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.5px;
  ry: 21.5px;
}

.ldv6xzmzj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v43M45.5 24h-43m40.536-10H5.069m37.967 20H5.069m30.691 8H12.239M35.76 6H12.239");
}

.vxbadybyg {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 8.5px;
  ry: 21.5px;
}
</style><circle class="cpk0fnbgt"/><ellipse class="vxbadybyg"/><ellipse class="di7p7v6vy"/><path class="ldv6xzmzj"/>`,
		"fallback": "arcticons:navy-federal",
	});
}

export default Component;
