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

.hx3z262ez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.8 11.1h34.4M2.934 19.7h42.131M2.934 28.3h42.131M6.8 36.9h34.4");
}
</style><circle class="cpk0fnbgt"/><path class="hx3z262ez"/>`,
		"fallback": "arcticons:vintify",
	});
}

export default Component;
