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

.edi79mb8h {
  cx: 24px;
  cy: 24px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s8q59gb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.55 35.79c1.66.77 3.5 1.21 5.45 1.21c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13c0 1.95.44 3.79 1.21 5.45");
}
</style><circle class="cpk0fnbgt"/><circle class="edi79mb8h"/><path class="s8q59gb4o"/>`,
		"fallback": "arcticons:mvvapp",
	});
}

export default Component;
