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
		"content": `<style>.uz1k6kb_i {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm9.884-5.5h1v-2.192h2.192v-1H15.5V8.116h-1v2.192h-2.192v1H14.5zM4 15.616h16v-9q0-.27-.173-.443T19.385 6H4.615q-.269 0-.442.173T4 6.616z");
}
</style><path class="uz1k6kb_i"/>`,
		"fallback": "material-symbols-light:magnify-docked",
	});
}

export default Component;
