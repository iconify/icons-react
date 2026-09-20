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
		"content": `<style>.cpd1msbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.98 13.802c1.652 1.071 2.533 2.324 2.533 3.604c0 3.635-6.946 6.581-15.513 6.581s-15.513-2.946-15.513-6.58c0-1.284.883-2.538 2.542-3.611");
}

.ig6bpsbwo {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 20.5px;
  ry: 13.175px;
}

.tboscobjx {
  cx: 24px;
  cy: 24.872px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.958px;
  ry: 12.303px;
}
</style><ellipse class="ig6bpsbwo"/><ellipse class="tboscobjx"/><path class="cpd1msbbe"/>`,
		"fallback": "arcticons:toyota",
	});
}

export default Component;
