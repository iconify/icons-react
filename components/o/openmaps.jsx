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
		"content": `<style>.n0qiuubas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.81 5.5L6.25 9.45a1 1 0 0 0-.74 1v31a1 1 0 0 0 1 1h.33l11-4.26l12.3 4.31l11.56-4a1 1 0 0 0 .74-1v-31a1 1 0 0 0-1-1l-.33.07l-11 4.19Zm12.31 4.31V42.5m-12.27-4.31V5.6");
}
</style><path class="n0qiuubas"/>`,
		"fallback": "arcticons:openmaps",
	});
}

export default Component;
