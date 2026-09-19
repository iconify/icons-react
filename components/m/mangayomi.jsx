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

.thyes5rbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.183 17.39h19.634m-16.057 0s.099 9.447-2.91 15.614M30.24 17.39s-.099 9.447 2.91 15.614M24 19.783v6.758");
}
</style><circle class="cpk0fnbgt"/><path class="thyes5rbd"/>`,
		"fallback": "arcticons:mangayomi",
	});
}

export default Component;
