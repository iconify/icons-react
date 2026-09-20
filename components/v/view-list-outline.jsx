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
		"content": `<style>.exv5andif {
  fill: currentColor;
  d: path("M8.5 18h10.885q.23 0 .423-.192t.192-.424v-2.559H8.5zM4 9.175h3.5V6H4.616q-.231 0-.424.192T4 6.616zm0 4.675h3.5v-3.675H4zM4.616 18H7.5v-3.175H4v2.56q0 .23.192.423t.423.192M8.5 13.85H20v-3.675H8.5zm0-4.675H20v-2.56q0-.23-.192-.423T19.385 6H8.5zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="exv5andif"/>`,
		"fallback": "material-symbols-light:view-list-outline",
	});
}

export default Component;
