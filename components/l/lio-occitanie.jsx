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
		"content": `<style>.n-rw3fbxt {
  cx: 5.988px;
  cy: 32.965px;
  r: 1.488px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nw5wotbap {
  cx: 18.155px;
  cy: 15.035px;
  r: 1.488px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uayb89x8a {
  cx: 33.791px;
  cy: 24.744px;
  r: 9.709px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ygzhvrbcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.054 14.564v19.889m6.101-14.88v14.582");
}
</style><path class="ygzhvrbcl"/><circle class="uayb89x8a"/><circle class="nw5wotbap"/><circle class="n-rw3fbxt"/>`,
		"fallback": "arcticons:lio-occitanie",
	});
}

export default Component;
