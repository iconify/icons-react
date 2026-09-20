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
		"content": `<style>.w5leji_ov {
  fill: currentColor;
  d: path("M4.5 20q-.213 0-.357-.143T4 19.5t.143-.357T4.5 19h9.366q.213 0 .356.143q.144.143.144.357t-.144.357t-.356.143zm0-3.384q-.213 0-.357-.144Q4 16.329 4 16.115q0-.213.143-.356t.357-.143h15q.214 0 .357.143t.143.357t-.143.356t-.357.144zm1.116-3.385q-.691 0-1.153-.463T4 11.616v-6q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v6q0 .69-.462 1.152t-1.153.463z");
}
</style><path class="w5leji_ov"/>`,
		"fallback": "material-symbols-light:page-menu-ios-rounded",
	});
}

export default Component;
