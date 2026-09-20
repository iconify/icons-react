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
		"content": `<style>.e_m6l5bll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 18.93h6.718m-3.359 10.14V18.93m23.641 0l-3.36 10.141l-3.358-10.141m-3.423 3.359a3.36 3.36 0 1 0-6.718 0v3.423a3.36 3.36 0 1 0 6.718 0h-3.36");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="e_m6l5bll"/>`,
		"fallback": "arcticons:tgv",
	});
}

export default Component;
