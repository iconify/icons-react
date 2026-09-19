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
		"content": `<style>.h22ycrexf {
  fill: none;
  stroke: currentColor;
  d: path("M40.957 32.167V6.608A2.11 2.11 0 0 0 38.848 4.5H9.151a2.11 2.11 0 0 0-2.108 2.108v25.559a3.65 3.65 0 0 0 1.826 3.162l13.305 7.682a3.65 3.65 0 0 0 3.652 0l13.305-7.682a3.65 3.65 0 0 0 1.826-3.162Z");
}

.ow_atqpfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.994 9.46v7.92h-7.92v6.01h7.92v7.922h6.013V23.39h7.92v-6.01h-7.92V9.46Z");
}
</style><path class="ow_atqpfl"/><path class="h22ycrexf"/>`,
		"fallback": "arcticons:librehealth",
	});
}

export default Component;
