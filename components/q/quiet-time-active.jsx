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
		"content": `<style>.jxks33bgv {
  fill: currentColor;
  d: path("M19.15 19.125L4.875 4.85q1.075-1.1 2.438-1.825T10.25 2q-.45 2.475.275 4.838t2.5 4.137t4.138 2.5T22 13.75q-.275 1.575-1.012 2.938t-1.838 2.437m-.775 4.925l-2.7-2.7q-.85.325-1.737.488T12.1 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2T2 11.9q0-.95.163-1.838t.487-1.737L-.025 5.65L1.4 4.225l18.4 18.4z");
}
</style><path class="jxks33bgv"/>`,
		"fallback": "material-symbols:quiet-time-active",
	});
}

export default Component;
