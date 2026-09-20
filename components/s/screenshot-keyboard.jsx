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
		"content": `<style>.af0et-rhi {
  fill: currentColor;
  d: path("M14.479 14.479Q15.5 13.458 15.5 12t-1.021-2.479T12 8.5T9.521 9.521T8.5 12t1.021 2.479T12 15.5t2.479-1.021M4.616 19q-.691 0-1.154-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="af0et-rhi"/>`,
		"fallback": "material-symbols-light:screenshot-keyboard",
	});
}

export default Component;
