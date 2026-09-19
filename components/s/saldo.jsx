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
		"content": `<style>.g6tdo1bug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.683 30.495c1.058 1.378 2.385 1.891 4.231 1.891h2.555a4.31 4.31 0 0 0 4.306-4.314h0a4.31 4.31 0 0 0-4.306-4.315h-2.823a4.31 4.31 0 0 1-4.305-4.315h0a4.31 4.31 0 0 1 4.305-4.314h2.555c1.846 0 3.173.513 4.232 1.89m-5.375-1.89v-2.165m0 21.463v-2.04");
}

.uizm-fiki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.454 2.57C37.307 3.817 45.5 13.005 45.5 23.93h0c0 11.874-9.626 21.5-21.5 21.5h0a21.5 21.5 0 0 1-9.488-2.207M5.644 12.736A21.5 21.5 0 0 1 21.153 2.62M10.174 40.394a21.5 21.5 0 0 1-6.877-22.262m11.215 25.091l-.002-.001");
}
</style><path class="uizm-fiki"/><path class="g6tdo1bug"/>`,
		"fallback": "arcticons:saldo",
	});
}

export default Component;
