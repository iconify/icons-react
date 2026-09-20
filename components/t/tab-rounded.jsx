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
		"content": `<style>.ul-lkld8a {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm9.192-9H20V6.616q0-.231-.192-.424T19.385 6H13v3.192q0 .348.23.578t.578.23");
}
</style><path class="ul-lkld8a"/>`,
		"fallback": "material-symbols-light:tab-rounded",
	});
}

export default Component;
