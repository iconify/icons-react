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
		"content": `<style>.k1-d_-5kn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.862 28.855l4.58-3.016l-3.672 8.53l4.643-3.12M24.08 43.002V26.53");
}

.q25en_b4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.569 16.266V32.74L24.08 43.002L7.591 32.74V16.266");
}

.qj0ktchqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.08 26.53L7.591 16.266L24.08 6.002l16.489 10.264z");
}
</style><path class="qj0ktchqm"/><path class="q25en_b4w"/><path class="k1-d_-5kn"/>`,
		"fallback": "arcticons:m64plus-fz",
	});
}

export default Component;
