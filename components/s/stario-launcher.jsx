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
		"content": `<style>.d57hfkbuu {
  cx: 35.393px;
  cy: 15.893px;
  r: 8.107px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pszbg-cib {
  cx: 12.607px;
  cy: 32.107px;
  r: 8.107px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rlb0a05cd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.607 24a8.107 8.107 0 0 1 0-16.213h15.775a8.107 8.107 0 0 0 0 16.213h7.011a8.107 8.107 0 0 1 0 16.213H19.618a8.107 8.107 0 0 0 0-16.213z");
}
</style><circle class="d57hfkbuu"/><circle class="pszbg-cib"/><path class="rlb0a05cd"/>`,
		"fallback": "arcticons:stario-launcher",
	});
}

export default Component;
