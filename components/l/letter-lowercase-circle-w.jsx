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

.jhfz0tbnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.6 18.7l-3.3 10.6L24 18.7l-3.3 10.6l-3.3-10.6");
}
</style><circle class="cpk0fnbgt"/><path class="jhfz0tbnd"/>`,
		"fallback": "arcticons:letter-lowercase-circle-w",
	});
}

export default Component;
