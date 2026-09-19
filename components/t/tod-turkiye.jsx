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

.n7mkvi_nm {
  cx: 23.984px;
  cy: 23.968px;
  r: 6.263px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q1h-hocqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 17.705h24.737a6.263 6.263 0 0 1 6.263 6.262h0a6.263 6.263 0 0 1-6.263 6.263M12.882 17.705v12.59");
}
</style><circle class="cpk0fnbgt"/><path class="q1h-hocqq"/><circle class="n7mkvi_nm"/>`,
		"fallback": "arcticons:tod-turkiye",
	});
}

export default Component;
