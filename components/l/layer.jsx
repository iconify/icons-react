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
		"content": `<style>.emcz3ebwo {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 16.5h18v3.857H3z");
}

.ft5dv1b6b {
  fill: none;
}

.p9c-20bqp {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 3.643h18V7.5H3z");
}

.tkpm1_sxr {
  fill: var(--svg-color--ff47a2, #ff47a2);
  d: path("M3 10.071h18v3.858H3z");
}
</style><g class="ft5dv1b6b"><path class="p9c-20bqp"/><path class="tkpm1_sxr"/><path class="emcz3ebwo"/></g>`,
		"fallback": "token-branded:layer",
	});
}

export default Component;
