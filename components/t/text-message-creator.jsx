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
		"content": `<style>.cv6z-kb4e {
  cx: 27px;
  cy: 22.5px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fk6n785-t {
  cx: 20.5px;
  cy: 22.5px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hm_p6lbsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.532 17.194C39.176 18.85 42.5 23.287 42.5 28.5v12h-12a11.96 11.96 0 0 1-8.078-3.127");
}

.jyi2l89dh {
  cx: 14px;
  cy: 22.5px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t9mjyyllg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 22.5c0-8.284 6.716-15 15-15s15 6.716 15 15s-6.716 15-15 15h-15z");
}
</style><path class="t9mjyyllg"/><path class="hm_p6lbsd"/><circle class="fk6n785-t"/><circle class="jyi2l89dh"/><circle class="cv6z-kb4e"/>`,
		"fallback": "arcticons:text-message-creator",
	});
}

export default Component;
