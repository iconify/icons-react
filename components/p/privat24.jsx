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

.uc_vu8hls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.548 33.5l-.001-19L25.35 27.262h12.588m-27.875-6.468a6.294 6.294 0 1 1 12.587 0a5.87 5.87 0 0 1-1.843 4.45C18.26 27.479 10.063 33.5 10.063 33.5H22.65");
}
</style><circle class="cpk0fnbgt"/><path class="uc_vu8hls"/>`,
		"fallback": "arcticons:privat24",
	});
}

export default Component;
