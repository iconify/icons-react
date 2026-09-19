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
		"content": `<style>.fkbkg5oka {
  cx: 24px;
  cy: 29.167px;
  r: 1px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kdpzf30wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 8.5l17.898 31H6.102zm0 12.833v6.834m.707 1.707l2.946 2.946");
}

.p3-37f6cr {
  cx: 24px;
  cy: 29.167px;
  r: 10.333px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="p3-37f6cr"/><circle class="fkbkg5oka"/><path class="kdpzf30wi"/>`,
		"fallback": "arcticons:sober-time",
	});
}

export default Component;
