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
		"content": `<style>.a47a0-bhr {
  cx: 24px;
  cy: 23.306px;
  r: 6.774px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dnah83b2s {
  cx: 24px;
  cy: 23.306px;
  r: 20.805px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gzsriabha {
  cx: 24.184px;
  cy: 23.477px;
  r: 2.903px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q4f6ofbuu {
  cx: 24px;
  cy: 23.306px;
  r: 17.418px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ssob8-fnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.344 25.417L30.81 45.5m-8.856-20.164l-4.616 20.041");
}

.x-8huovpj {
  cx: 24px;
  cy: 23.306px;
  r: 11.612px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="dnah83b2s"/><circle class="q4f6ofbuu"/><circle class="x-8huovpj"/><circle class="a47a0-bhr"/><circle class="gzsriabha"/><path class="ssob8-fnz"/>`,
		"fallback": "arcticons:sdrtouch",
	});
}

export default Component;
