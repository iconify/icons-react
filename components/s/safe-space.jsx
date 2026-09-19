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
		"content": `<style>.b8korub_b {
  cx: 43.229px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dqevnlb7a {
  cx: 40.653px;
  cy: 33.614px;
  r: 0.75px;
  fill: currentColor;
}

.f0ts873xt {
  cx: 14.386px;
  cy: 7.347px;
  r: 0.75px;
  fill: currentColor;
}

.hhdko5btq {
  cx: 7.347px;
  cy: 14.386px;
  r: 0.75px;
  fill: currentColor;
}

.hnjeb3beo {
  cx: 14.386px;
  cy: 40.653px;
  r: 0.75px;
  fill: currentColor;
}

.m9tnkbcgp {
  cx: 33.614px;
  cy: 40.653px;
  r: 0.75px;
  fill: currentColor;
}

.n4bt4jlzx {
  cx: 24px;
  cy: 4.771px;
  r: 0.75px;
  fill: currentColor;
}

.o3t5lzbbn {
  cx: 24px;
  cy: 24px;
  r: 6.511px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p6qu7_bne {
  cx: 7.347px;
  cy: 33.614px;
  r: 0.75px;
  fill: currentColor;
}

.ru79h1-qi {
  cx: 33.614px;
  cy: 7.347px;
  r: 0.75px;
  fill: currentColor;
}

.rz-sx-dvt {
  cx: 40.653px;
  cy: 14.386px;
  r: 0.75px;
  fill: currentColor;
}

.t6c478zvp {
  cx: 24px;
  cy: 43.229px;
  r: 0.75px;
  fill: currentColor;
}

.tewwh_2ce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 36.59v-6.08m0-13.02v-6.08m10.903 18.885l-5.265-3.04m-11.276-6.51l-5.265-3.04m0 12.59l5.265-3.04m11.276-6.51l5.265-3.04");
}

.vh31_ycmh {
  cx: 4.771px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.vqogbbbht {
  cx: 24px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}

.yllh3bcyy {
  cx: 24px;
  cy: 24px;
  r: 16.957px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="yllh3bcyy"/><circle class="n4bt4jlzx"/><circle class="t6c478zvp"/><circle class="b8korub_b"/><circle class="vh31_ycmh"/><circle class="f0ts873xt"/><circle class="m9tnkbcgp"/><circle class="ru79h1-qi"/><circle class="hnjeb3beo"/><circle class="hhdko5btq"/><circle class="dqevnlb7a"/><circle class="rz-sx-dvt"/><circle class="p6qu7_bne"/><circle class="o3t5lzbbn"/><circle class="vqogbbbht"/><path class="tewwh_2ce"/>`,
		"fallback": "arcticons:safe-space",
	});
}

export default Component;
