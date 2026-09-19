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
		"content": `<style>.izcioekpx {
  cx: 24px;
  cy: 26.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.4px;
  ry: 16.6px;
}

.pw9rwcbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.1 28.9V17.5M19 4.5h10.1v3.4H19zm15.6 9.6l2.9-2.7l2.1 2.3l-2.9 2.7");
}
</style><ellipse class="izcioekpx"/><path class="pw9rwcbbd"/>`,
		"fallback": "arcticons:tenbitclockwidget",
	});
}

export default Component;
