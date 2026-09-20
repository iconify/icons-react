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
		"content": `<style>.u8ncd1b6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 8.28l1.65 1.79A14 14 0 0 1 24 38a14 14 0 0 1-1.64-28zm0 9.54A6.18 6.18 0 0 1 30.18 24A6.18 6.18 0 0 1 24 30.18A6.18 6.18 0 0 1 17.82 24A6.18 6.18 0 0 1 24 17.82m0-11.64V3.5m12.6 7.9l1.9-1.9M41.82 24h2.68m-7.9 12.6l1.9 1.9M24 41.82v2.68m-12.6-7.9l-1.9 1.9M6.18 24H3.5m7.9-12.6L9.5 9.5");
}
</style><path class="u8ncd1b6a"/>`,
		"fallback": "arcticons:passwordkeeper",
	});
}

export default Component;
