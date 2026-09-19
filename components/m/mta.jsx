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
		"content": `<style>.jgxe6110j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.952 9.828C18.46 3.53 29.575 4.177 36.3 11.305c6.725 7.127 6.725 18.263 0 25.39c-6.725 7.128-17.84 7.776-25.348 1.477");
}

.kt_a2gbtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.656 35.562V12.438l5.782 22.16l5.78-20.233v19.27M24 32.672V15.328m-3.469-.578l6.938 1.156m1.229 10.658l4.599-.25m-5.828 5.78l3.468-15.61l3.47 14.453");
}
</style><path class="jgxe6110j"/><path class="kt_a2gbtt"/>`,
		"fallback": "arcticons:mta",
	});
}

export default Component;
