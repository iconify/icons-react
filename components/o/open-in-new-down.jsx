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
		"content": `<style>.tryx7jbhf {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v6h-1v-6q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h6v1zM14 20v-1h4.312L9.089 9.777l.688-.688L19 18.287V14h1v6z");
}
</style><path class="tryx7jbhf"/>`,
		"fallback": "material-symbols-light:open-in-new-down",
	});
}

export default Component;
