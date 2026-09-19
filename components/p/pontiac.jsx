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
		"content": `<style>.u0metps2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.982 19.685l-1.186-3.3l-4.078-1.087l3.987-.981l1.312-3.377l1.186 3.3l4.078 1.087l-3.987.982z");
}

.u7w53sbwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.995 9.108L13.585 4.5s10.42 38.787 10.368 39L34.416 4.545z");
}
</style><path class="u7w53sbwj"/><path class="u0metps2m"/>`,
		"fallback": "arcticons:pontiac",
	});
}

export default Component;
