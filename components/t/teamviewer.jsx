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
		"content": `<style>.bfhoertlk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.101 24l13.737 6.988l-1.747-4.728H24M5.101 24l13.737-6.988l-1.747 4.728H24m0 4.52h6.909l-1.747 4.728L42.899 24m0 0l-13.737-6.988l1.747 4.728H24");
}

.wtwey3b0e {
  cx: 24px;
  cy: 24px;
  r: 21px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="wtwey3b0e"/><path class="bfhoertlk"/>`,
		"fallback": "arcticons:teamviewer",
	});
}

export default Component;
