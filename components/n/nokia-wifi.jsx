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

.h7x3j574c {
  cx: 24px;
  cy: 24px;
  r: 9.093px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.scjmwrv0l {
  cx: 24px;
  cy: 24px;
  r: 15.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="scjmwrv0l"/><circle class="cpk0fnbgt"/><circle class="h7x3j574c"/>`,
		"fallback": "arcticons:nokia-wifi",
	});
}

export default Component;
