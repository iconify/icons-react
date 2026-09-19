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

.pbp-pobsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29 24a5 5 0 0 1-10 0V3.086M35.514 24l-1-6.056L31.757 24L29 17.944V24");
}
</style><circle class="cpk0fnbgt"/><path class="pbp-pobsd"/>`,
		"fallback": "arcticons:liveuamap",
	});
}

export default Component;
