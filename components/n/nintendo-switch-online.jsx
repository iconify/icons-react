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
		"content": `<style>.fvl_8plug {
  cx: 13.5px;
  cy: 16.2px;
  r: 3.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jn72-bmtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.5 5.5h-7.3c-4.8 0-8.7 3.9-8.7 8.6V34c0 4.7 3.9 8.6 8.7 8.6h7.3zm12.3 0h-7.3v37.1h7.3c4.8 0 8.7-3.9 8.7-8.6V14.1c0-4.7-3.9-8.6-8.7-8.6");
}

.ny0negbmt {
  cx: 34.5px;
  cy: 26.2px;
  r: 3.4px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="fvl_8plug"/><circle class="ny0negbmt"/><path class="jn72-bmtb"/>`,
		"fallback": "arcticons:nintendo-switch-online",
	});
}

export default Component;
