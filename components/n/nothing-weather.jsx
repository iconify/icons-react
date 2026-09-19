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
		"content": `<style>.fse3fd0dk {
  cx: 10.245px;
  cy: 11.467px;
  r: 3.745px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jy43q9bhp {
  cx: 16.194px;
  cy: 36.096px;
  r: 0.836px;
  fill: currentColor;
}

.p28cyml_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.263 32.488c5.653 0 10.237-4.583 10.237-10.237s-4.583-10.238-10.237-10.238c-4.597 0-8.486 3.03-9.78 7.202a7.4 7.4 0 0 0-4.578-1.586a7.43 7.43 0 0 0 0 14.86z");
}

.pa4tl8uox {
  cx: 24px;
  cy: 36.096px;
  r: 0.836px;
  fill: currentColor;
}

.pwlzkicxe {
  cx: 28.461px;
  cy: 39.441px;
  r: 0.836px;
  fill: currentColor;
}

.q21_uj6je {
  cx: 20.655px;
  cy: 39.441px;
  r: 0.836px;
  fill: currentColor;
}

.rvu_fdcwx {
  cx: 31.806px;
  cy: 36.096px;
  r: 0.836px;
  fill: currentColor;
}

.z92mi69nu {
  cx: 12.849px;
  cy: 39.441px;
  r: 0.836px;
  fill: currentColor;
}
</style><circle class="fse3fd0dk"/><path class="p28cyml_a"/><circle class="rvu_fdcwx"/><circle class="pwlzkicxe"/><circle class="pa4tl8uox"/><circle class="q21_uj6je"/><circle class="jy43q9bhp"/><circle class="z92mi69nu"/>`,
		"fallback": "arcticons:nothing-weather",
	});
}

export default Component;
