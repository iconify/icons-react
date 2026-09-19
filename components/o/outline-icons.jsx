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

.q7erapdly {
  cx: 24px;
  cy: 34.027px;
  r: 11.47px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qz7fe2b9x {
  cx: 24px;
  cy: 37.444px;
  r: 8.056px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rj71ndb6d {
  cx: 24px;
  cy: 37.5px;
  r: 8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t5ve8r4cj {
  cx: 24px;
  cy: 29.25px;
  r: 16.249px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="t5ve8r4cj"/><circle class="q7erapdly"/><circle class="qz7fe2b9x"/><circle class="rj71ndb6d"/>`,
		"fallback": "arcticons:outline-icons",
	});
}

export default Component;
