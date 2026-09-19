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
		"content": `<style>.gmvelmxic {
  cx: 24px;
  cy: 35.182px;
  r: 9.318px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r975nsb7x {
  cx: 24px;
  cy: 12.818px;
  r: 9.318px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="r975nsb7x"/><circle class="gmvelmxic"/>`,
		"fallback": "arcticons:stop-and-shop",
	});
}

export default Component;
