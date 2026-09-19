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
		"content": `<style>.lrzn99b0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l-8.91 25.73h17.82Zm-8.91 25.73L24 43.5l8.91-13.27Z");
}

.n3p2ty2ew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l8.91 25.73l8.87-.39Zm17.78 25.34l-8.87.39L24 43.5ZM24 4.5L6.22 29.84l8.87.39Z");
}

.qqwcefbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.22 29.84L24 43.5l-8.91-13.27Z");
}
</style><path class="lrzn99b0p"/><path class="n3p2ty2ew"/><path class="qqwcefbui"/>`,
		"fallback": "arcticons:sokoban",
	});
}

export default Component;
