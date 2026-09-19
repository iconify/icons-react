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
		"content": `<style>.teokchmle {
  width: 27px;
  height: 27px;
  x: 10.5px;
  y: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.tl-ijmbkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18 17.859h12v12H18zm19.5 2.001h5m-5 8.18h5M27.865 37.5v5m-7.955-5v5M5.5 28.027h5m-5-8.167h5m9.41-14.348V10.5m7.955-5v5");
}
</style><rect class="teokchmle"/><path class="tl-ijmbkx"/>`,
		"fallback": "arcticons:phone-performance",
	});
}

export default Component;
