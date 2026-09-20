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

.qzrl1obqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.39 16.5h4v15h-4zm6.72 0h4v15h-4zm-9.22 8l-12 7v-14z");
}
</style><circle class="cpk0fnbgt"/><path class="qzrl1obqe"/>`,
		"fallback": "arcticons:retropod",
	});
}

export default Component;
