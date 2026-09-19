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
		"content": `<style>.dbtdijb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.248 27.11a4.5 4.5 0 1 0 0-6.221");
}

.edy6fe7nl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.748 27.11a4.5 4.5 0 1 0 0-6.22");
}

.eff_hqbns {
  cx: 19.5px;
  cy: 24px;
  r: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kkxq43b-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.747 27.11a4.5 4.5 0 1 0 .071-6.292");
}

.sj9_3-ozw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 8.5v31");
}
</style><path class="sj9_3-ozw"/><circle class="eff_hqbns"/><path class="edy6fe7nl"/><path class="dbtdijb3g"/><path class="kkxq43b-f"/>`,
		"fallback": "arcticons:pong",
	});
}

export default Component;
