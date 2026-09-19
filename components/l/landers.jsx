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

.rk9m3-bsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.717 17.813A8.75 8.75 0 1 1 24 24a8.75 8.75 0 1 0-10.717 6.187");
}

.zwh-ikbaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.813 13.283A8.75 8.75 0 1 1 24 24a8.75 8.75 0 1 0 6.187 10.717");
}
</style><circle class="cpk0fnbgt"/><path class="zwh-ikbaf"/><path class="rk9m3-bsv"/>`,
		"fallback": "arcticons:landers",
	});
}

export default Component;
