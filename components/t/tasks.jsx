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
		"content": `<style>.y_9o_r4uv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.13 7.85l6.66 4.87l-16.37 22.39l-4.87 6.67l-6.66-4.87l-11.1-8.12l4.87-6.66l11.1 8.12Z");
}
</style><path class="y_9o_r4uv"/>`,
		"fallback": "arcticons:tasks",
	});
}

export default Component;
