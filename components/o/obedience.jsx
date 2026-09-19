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
		"content": `<style>.kiig5cc1i {
  cx: 24px;
  cy: 17.767px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 19.5px;
  ry: 7.973px;
}

.ok0qm9l4u {
  cx: 24.194px;
  cy: 33.895px;
  r: 4.311px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t7svcmlez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.03 20.807c-2.924-2.895-9.895-4.931-18.03-4.931S8.893 17.913 5.969 20.807");
}

.ugg2vsbba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.194 30.268v-1.369");
}

.whkis1brj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 17.767v7.422c0 4.403 8.73 7.973 19.5 7.973s19.5-3.57 19.5-7.973v-7.422");
}
</style><ellipse class="kiig5cc1i"/><path class="t7svcmlez"/><path class="whkis1brj"/><circle class="ok0qm9l4u"/><path class="ugg2vsbba"/>`,
		"fallback": "arcticons:obedience",
	});
}

export default Component;
