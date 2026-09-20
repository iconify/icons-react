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
		"content": `<style>.t1sheac0r {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384v-2.423h1v2.423q0 .231.192.424t.423.192h12.77q.23 0 .423-.192t.192-.424V7.154H5v3.038H4V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm5.5-3.134l-.689-.689l2.556-2.6H4v-1h8.983l-2.556-2.6l.689-.688l3.788 3.788z");
}
</style><path class="t1sheac0r"/>`,
		"fallback": "material-symbols-light:tab-move-outline",
	});
}

export default Component;
