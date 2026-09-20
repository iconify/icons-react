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
		"content": `<style>.b3nyq6ffw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.235 30.5c2.357-.123 4.125-2.24 4.125-4.6v-4.04a4.36 4.36 0 0 0-8.72 0");
}

.gzmjkt63b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M13.92 5.5v37m20.16-37v37m8.42-28.58h-37m37 20.16h-37");
}

.jryv2m1de {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.64 21.86a4.36 4.36 0 0 0 8.72 0m-7.954 7.216c.797 1.037 1.797 1.424 3.187 1.424h.641");
}

.xq-89_owi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="xq-89_owi"/><path class="gzmjkt63b"/><path class="b3nyq6ffw"/><path class="jryv2m1de"/>`,
		"fallback": "arcticons:opensudoku",
	});
}

export default Component;
