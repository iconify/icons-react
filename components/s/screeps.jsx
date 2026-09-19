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
		"content": `<style>.dk9owjb9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 35.48L14.78 24L4.5 12.51h7.09L21.88 24L11.59 35.48Zm35.51 0H25.13a3.2 3.2 0 0 1 0-6.38H40a3.2 3.2 0 1 1 .57 6.38a5 5 0 0 1-.57 0Z");
}
</style><path class="dk9owjb9i"/>`,
		"fallback": "arcticons:screeps",
	});
}

export default Component;
