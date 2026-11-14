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
		"content": `<style>.lovw6dboz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 1.75h10.25q2.123 0 3.624 1.501t1.501 3.624v10.25q0 2.123-1.501 3.624t-3.624 1.501H6.875q-2.123 0-3.624-1.501T1.75 17.125V6.875q0-2.123 1.501-3.624T6.875 1.75m3.053 8.609q-.315.446-.398 1.124q-1.13-.296-2.49.505q-2.361 1.388-1.495 3.768q.048.132.14.238q1.666 1.906 4.025.518q1.435-.844 1.678-2.055q.285.043.612.043q.318 0 .607-.069q.232 1.228 1.683 2.081q2.359 1.388 4.025-.518q.092-.106.14-.238q.866-2.38-1.495-3.768q-1.371-.807-2.508-.5q-.113-.575-.49-1.04q1.037-.788 1.037-2.698q0-3.248-2.999-3.25q-2.999.002-2.999 3.25q0 1.806.927 2.609");
}
</style><path class="lovw6dboz"/>`,
		"fallback": "uix-solid:ventilation",
	});
}

export default Component;
