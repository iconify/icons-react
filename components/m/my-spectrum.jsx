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
		"content": `<style>.chdt74bhh {
  cx: 24.412px;
  cy: 15.074px;
  r: 9.574px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qpgc8sblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.865 42.5c0-9.867-7.998-17.865-17.865-17.865S6.135 32.633 6.135 42.5z");
}
</style><path class="qpgc8sblw"/><circle class="chdt74bhh"/>`,
		"fallback": "arcticons:my-spectrum",
	});
}

export default Component;
