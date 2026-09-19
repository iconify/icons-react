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
		"content": `<style>.ez09yt_vm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.7 30.2h6.2v6.2h-6.2zM24 11.7h6.2v6.2H24zM5.5 30.2h6.2v6.2H5.5zm18.5 0h6.2v6.2H24z");
}

.gbnz8dz3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.2 11.7h6.2v6.2h-6.2zM17.8 24H24v6.2h-6.2zM24 36.3h6.2v6.2H24zm12.3 0h6.2v6.2h-6.2z");
}

.hd3-8oc3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.2 24h6.2v6.2h-6.2z");
}

.iewwztb2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.8 30.2H24v6.2h-6.2zm12.4 6.1h6.2v6.2h-6.2z");
}

.jx_3dcctc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 17.8h6.2V24H24zm6.2 0h6.2V24h-6.2zm6.1-12.3h6.2v6.2h-6.2z");
}

.n2d7o0bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.3 30.2h6.2v6.2h-6.2zM24 24h6.2v6.2H24zm-6.2 12.3H24v6.2h-6.2z");
}

.p8ljuab-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.2 30.2h6.2v6.2h-6.2zm6.1-6.2h6.2v6.2h-6.2z");
}

.r2bax80kx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.7 36.3h6.2v6.2h-6.2zm-6.2 0h6.2v6.2H5.5z");
}
</style><path class="jx_3dcctc"/><path class="gbnz8dz3o"/><path class="n2d7o0bxf"/><path class="r2bax80kx"/><path class="ez09yt_vm"/><path class="iewwztb2j"/><path class="p8ljuab-e"/><path class="hd3-8oc3a"/>`,
		"fallback": "arcticons:retro-stack",
	});
}

export default Component;
