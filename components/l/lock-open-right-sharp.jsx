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
		"content": `<style>.f2uomibrs {
  fill: currentColor;
  d: path("M13.066 16.066q.434-.433.434-1.066t-.434-1.066T12 13.5t-1.066.434Q10.5 14.367 10.5 15t.434 1.066q.433.434 1.066.434t1.066-.434M5 21V9h9V7q0-1.671 1.165-2.835Q16.329 3 18 3t2.836 1.165T22 7h-1q0-1.25-.875-2.125T18 4t-2.125.875T15 7v2h4v12z");
}
</style><path class="f2uomibrs"/>`,
		"fallback": "material-symbols-light:lock-open-right-sharp",
	});
}

export default Component;
