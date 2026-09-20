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

.xmmew6bft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.7 24a4 4 0 0 0 0 8h2.6a4 4 0 0 0 0-8m0 0a4 4 0 0 0 0-8h-2.6a4 4 0 0 0 0 8m0 0h2.6");
}
</style><circle class="cpk0fnbgt"/><path class="xmmew6bft"/>`,
		"fallback": "arcticons:number-circle-8",
	});
}

export default Component;
