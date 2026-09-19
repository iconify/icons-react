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
		"content": `<style>.jz-pz72tq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 39.376V8.624H13.562v30.752M27.96 8.624v30.752M5.5 8.624v23.611m0 4.146v2.995");
}
</style><path class="jz-pz72tq"/>`,
		"fallback": "arcticons:nomachine",
	});
}

export default Component;
