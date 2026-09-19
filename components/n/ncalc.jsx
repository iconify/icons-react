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
		"content": `<style>.g8eofqbbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.232 4.5v14.053m7.027-7.026H26.206M12.838 33.784V17.977a1 1 0 0 1 1.708-.706l16.978 17.053a1 1 0 0 0 1.708-.705V21.895");
}

.wee0kgadd {
  cx: 12.838px;
  cy: 38.642px;
  r: 4.858px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="g8eofqbbm"/><circle class="wee0kgadd"/>`,
		"fallback": "arcticons:ncalc",
	});
}

export default Component;
