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
		"content": `<style>.i6gq-ob6h {
  cx: 24px;
  cy: 20.5px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lcgmgrd6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 8.5l12 12l-12 12l-12-12z");
}

.og-53mbsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36 27.5l-12 12l-12-12m24-7h6.5m-37 0H12");
}
</style><path class="lcgmgrd6n"/><path class="og-53mbsn"/><circle class="i6gq-ob6h"/>`,
		"fallback": "arcticons:opensuse-leap-micro",
	});
}

export default Component;
