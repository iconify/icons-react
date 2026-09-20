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
		"content": `<style>.z0ip56brn {
  fill: currentColor;
  d: path("M4.616 20.808q-.691 0-1.153-.463T3 19.192v-7.769q0-.69.463-1.153t1.152-.462H7v-5q0-.69.463-1.153t1.153-.463h10.769q.69 0 1.153.463T21 4.808v7.769q0 .69-.462 1.153t-1.153.462H17v5q0 .69-.462 1.153t-1.153.463zm0-1h10.769q.23 0 .423-.193q.192-.192.192-.423v-6.384H4v6.384q0 .231.192.423q.192.193.423.193M17 13.192h2.385q.23 0 .423-.192t.192-.423V6.192H8v3.616h7.385q.69 0 1.152.462T17 11.423z");
}
</style><path class="z0ip56brn"/>`,
		"fallback": "material-symbols-light:select-window",
	});
}

export default Component;
