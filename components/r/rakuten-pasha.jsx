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
		"content": `<style>.g8a0gd22y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.424 35.806l-4-6.928l2.268-1.31a2.684 2.684 0 0 1 3.665.986a2.684 2.684 0 0 1-.978 3.668l-2.268 1.31m13.086-13.76l4 6.928m-1.65-2.858a2 2 0 1 1 3.464-2l1.65 2.858m-8.196 4.216c.47.083.881.008 1.648-.435l.389-.224a1.323 1.323 0 0 0 .482-1.809a1.324 1.324 0 0 0-1.807-.486l-.777.448c-.633.365-1.442.148-1.808-.486s-.15-1.443.483-1.809l.388-.224c.767-.443 1.179-.518 1.648-.435m-3.083 5.073a2 2 0 1 1-3.464 2l-.65-1.126a2 2 0 1 1 3.464-2m1.65 2.858l-2.65-4.59m16.298-5.599a2 2 0 1 1-3.464 2l-.65-1.126a2 2 0 1 1 3.464-2m1.65 2.858l-2.65-4.589m0-2.85v-2.171m-2.015 3.005l-1.535-1.535m5.565 1.535l1.535-1.535");
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
</style><rect class="j3s9ivbxi"/><path class="g8a0gd22y"/>`,
		"fallback": "arcticons:rakuten-pasha",
	});
}

export default Component;
