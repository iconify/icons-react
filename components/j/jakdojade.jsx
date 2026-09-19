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
		"content": `<style>.c4a01bcqb {
  cx: 9.04px;
  cy: 24.35px;
  r: 0.75px;
  fill: currentColor;
}

.dtao4nvqg {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M16.29 36a24.4 24.4 0 0 1-5.6-7.41m22.57-12.22A77.8 77.8 0 0 0 20.58 34.7");
}

.egsm3dbem {
  cx: 9.04px;
  cy: 24.35px;
  r: 4.54px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.rkfvvwblo {
  cx: 19.19px;
  cy: 37.99px;
  r: 3.52px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.t8t871bit {
  cx: 37.6px;
  cy: 12.39px;
  r: 0.75px;
  fill: currentColor;
}

.u2ddje66x {
  cx: 37.6px;
  cy: 12.39px;
  r: 5.9px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
}

.ukv-lwb4u {
  cx: 19.19px;
  cy: 37.99px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="egsm3dbem"/><circle class="u2ddje66x"/><circle class="rkfvvwblo"/><path class="dtao4nvqg"/><circle class="c4a01bcqb"/><circle class="ukv-lwb4u"/><circle class="t8t871bit"/>`,
		"fallback": "arcticons:jakdojade",
	});
}

export default Component;
