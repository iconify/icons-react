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
		"content": `<style>.agkwgde6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.979 17.5l13 13l-13 13m24.042-13l-13-13l13-13");
}
</style><path class="agkwgde6l"/>`,
		"fallback": "arcticons:rd-client",
	});
}

export default Component;
