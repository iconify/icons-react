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
		"content": `<style>.ahf75yaif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.47 19.28A23.42 23.42 0 0 1 28.7 7.8m.46-.21l-23.43 11m34.74.69L31 40.85");
}

.jujcs3brl {
  cx: 34.54px;
  cy: 13.69px;
  r: 8.18px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ow3qb4bpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31 21.22L14 42.27M26.2 14l-10.36 7.07");
}
</style><path class="ahf75yaif"/><circle class="jujcs3brl"/><path class="ow3qb4bpn"/>`,
		"fallback": "arcticons:look4sat",
	});
}

export default Component;
