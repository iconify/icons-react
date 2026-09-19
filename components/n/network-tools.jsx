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

.osg__jbhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.622 12v16.646m9.75-16.638V36M14.63 20.37h9.723m.019 0h9.006m-9.006 7.815h7.685M24.372 36h9.006");
}
</style><circle class="cpk0fnbgt"/><path class="osg__jbhf"/>`,
		"fallback": "arcticons:network-tools",
	});
}

export default Component;
