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

.m6e4b_idd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v26.981h-6.393V3.467m27.187 26.014h-5.149V9.253M12.981 5.535v23.946H6.589V11.385m14.215 18.096v15.782M9.785 40.13V29.481M31.822 3.968v40.064m11.019-14.551v4.883");
}
</style><circle class="cpk0fnbgt"/><path class="m6e4b_idd"/>`,
		"fallback": "arcticons:tonality",
	});
}

export default Component;
