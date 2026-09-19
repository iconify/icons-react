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
		"content": `<style>.g163bkb4o {
  cx: 11.425px;
  cy: 13.057px;
  r: 5.925px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h8fnusbwc {
  cx: 11.425px;
  cy: 25.753px;
  r: 2.902px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hs60m7n8j {
  cx: 11.425px;
  cy: 37.966px;
  r: 2.902px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r3669d6js {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.922 37.966H42.5M18.922 25.753H42.5M21.803 13.057H42.5m-33.906.234l1.732 1.731l3.929-3.93");
}
</style><circle class="g163bkb4o"/><circle class="h8fnusbwc"/><circle class="hs60m7n8j"/><path class="r3669d6js"/>`,
		"fallback": "arcticons:to-do-list-1",
	});
}

export default Component;
