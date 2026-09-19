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
		"content": `<style>.bfm5ob_ma {
  cx: 24px;
  cy: 24px;
  r: 11.556px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wui1logvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.556 24c0 8.576-6.952 15.528-15.528 15.528S4.5 32.576 4.5 24zm-23.112 0c0-8.576 6.952-15.528 15.528-15.528S43.5 15.424 43.5 24z");
}
</style><path class="wui1logvc"/><circle class="bfm5ob_ma"/>`,
		"fallback": "arcticons:resurs",
	});
}

export default Component;
