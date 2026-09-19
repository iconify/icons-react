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
		"content": `<style>.tykk0ub4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.8 8.5H16m-3.2 4.8H16m-3.2 4.8H16m3.2-9.6h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2m3.2-9.6h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M32 8.5h3.2M32 13.3h3.2M32 18.1h3.2M12.8 25H16m-3.2 4.9H16m-3.2 4.8H16m-3.2 4.8H16M19.2 25h3.2m-3.2 4.9h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M25.6 25h3.2m-3.2 4.9h3.2m-3.2 4.8h3.2m-3.2 4.8h3.2M32 25h3.2M32 29.9h3.2M32 34.7h3.2M32 39.5h3.2");
}

.uhx3m_1tm {
  width: 31px;
  height: 39px;
  x: 8.5px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="tykk0ub4m"/><rect class="uhx3m_1tm"/>`,
		"fallback": "arcticons:irplus",
	});
}

export default Component;
