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
		"content": `<style>.dg64d3bap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.479 5.5c-6.55 18.591-21.504 30.164-36.957 37");
}

.o_fuibc1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.852 23.116c.451.781.322 1.987-.458 2.438s-1.918-.025-2.368-.806zm-.065-7.878l3.731 5.961m-13.554-.118l3.731 5.961m-.022 15.224c1.482-.87 2.613-1.774 3.643-2.686m16.533-16.253c1.1-1.322 1.856-2.555 2.517-3.762M34.01 30.29c1.28-1.15 2.206-2.261 3.034-3.361m-9.716 9.719c1.399-1 2.443-2.001 3.388-3.002m-20.136-9.6c-1.773-5.482-.305-11.34 5.392-14.662c4.18-2.438 10.307-2.198 14.754 2.527M17.735 35.873L10.561 24.04m20.166-12.135l4.695 7.225");
}
</style><path class="o_fuibc1c"/><path class="dg64d3bap"/>`,
		"fallback": "arcticons:pocketpal",
	});
}

export default Component;
