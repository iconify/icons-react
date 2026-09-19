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
		"content": `<style>.p12p_xbwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.683 18.874l6.578-1.763a1.76 1.76 0 0 1 2.157 1.241l.002.008l2.156 8.05a1.76 1.76 0 0 1-1.238 2.16l-.007.002l-6.577 1.763a1.76 1.76 0 0 1-2.158-1.242l-.001-.007l-2.157-8.05a1.76 1.76 0 0 1 1.238-2.16zm-9.782.129l6.413 23.934M10.562 8.823c.27 7.08-1.347 15.63-3.586 20.356m8.703-18.29l21.738-5.825m-3.761 1.008l7.233 26.993c.544 2.032-.648 3.631-2.464 4.118c-1.623.435-3.114.467-5.215.017");
}
</style><path class="p12p_xbwh"/>`,
		"fallback": "arcticons:nani",
	});
}

export default Component;
