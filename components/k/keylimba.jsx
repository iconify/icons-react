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
		"content": `<style>.ab-ywxbuf {
  cx: 31.577px;
  cy: 20.153px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.423px;
  ry: 2.692px;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.karentfnc {
  cx: 16.423px;
  cy: 20.153px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.423px;
  ry: 2.692px;
}

.nmcb4-b8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.671 27.46c-1.328 1.84-3.335 3.08-6.671 3.08s-5.343-1.238-6.671-3.08");
}
</style><circle class="cpk0fnbgt"/><ellipse class="karentfnc"/><ellipse class="ab-ywxbuf"/><path class="nmcb4-b8d"/>`,
		"fallback": "arcticons:keylimba",
	});
}

export default Component;
