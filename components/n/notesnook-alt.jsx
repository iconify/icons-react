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

.pv9rozb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v29.575m0 0L7.167 37.374M24 32.075l16.833 5.299m-13.644-7.497l10.781 3.394m-10.781-6.08l8.277 2.606m-8.277-5.292l10.781 3.394m-17.535-8.7v10.816l-7.248-8.534v10.79");
}
</style><circle class="cpk0fnbgt"/><path class="pv9rozb9a"/>`,
		"fallback": "arcticons:notesnook-alt",
	});
}

export default Component;
