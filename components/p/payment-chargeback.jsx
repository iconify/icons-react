import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fyhcivbxa {
  d: path("M12.1 19H2.5V5h19v10.2m-19-5.7h19m-19 0h19M6 15h2.5M21 18h-6");
}

.txdf6pbob {
  d: path("M17.5 15.5L15 18l2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fyhcivbxa"/><path class="txdf6pbob"/></g>`,
		"fallback": "uix-sharp:payment-chargeback",
	});
}

export default Component;
