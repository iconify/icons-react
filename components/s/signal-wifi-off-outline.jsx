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
		"content": `<style>.yf9wkrlwk {
  fill: currentColor;
  d: path("M17.925 15.075L16.5 13.65l4.6-4.6q-1.975-1.5-4.3-2.275T12 6q-.725 0-1.45.075t-1.45.2l-1.65-1.65q1.125-.3 2.25-.462T12 4q3.4 0 6.513 1.287T24 9zM12 18.15l1.675-1.65l-8.75-8.75q-.525.275-1.025.613t-1 .687zm8.475 5.15L15.1 17.9L12 21L0 9q.8-.8 1.663-1.475T3.475 6.3l-2.8-2.8L2.1 2.075l19.8 19.8zM9.3 12.125");
}
</style><path class="yf9wkrlwk"/>`,
		"fallback": "material-symbols:signal-wifi-off-outline",
	});
}

export default Component;
