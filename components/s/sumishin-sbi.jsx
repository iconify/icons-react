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

.ddtwylemi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.235 29.988c-9.207-9.207-2.175-20.372.206-24.152L12.73 18.068c9.207 9.207 2.192 20.345-.189 24.125z");
}
</style><circle class="cpk0fnbgt"/><path class="ddtwylemi"/>`,
		"fallback": "arcticons:sumishin-sbi",
	});
}

export default Component;
