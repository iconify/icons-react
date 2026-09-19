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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z-8q66eve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.404 28.596a6.5 6.5 0 1 1 9.192 0M24 24l15.203 15.203M24 24L8.797 39.203");
}
</style><circle class="cpk0fnbgt"/><path class="z-8q66eve"/>`,
		"fallback": "arcticons:komoot",
	});
}

export default Component;
