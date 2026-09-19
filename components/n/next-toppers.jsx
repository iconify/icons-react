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
		"content": `<style>.qx35zlbpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24H26.746L12.574 5.5h15.754zm-19.997 0h-8.95L5.5 13.489h8.951zM42.5 24H26.746L12.574 42.5h15.754z");
}

.y_du-34gy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.503 24h-8.95L5.5 34.511h8.951z");
}
</style><path class="qx35zlbpb"/><path class="y_du-34gy"/>`,
		"fallback": "arcticons:next-toppers",
	});
}

export default Component;
