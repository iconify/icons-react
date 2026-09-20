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
		"content": `<style>.s54huzb7l {
  fill: currentColor;
  d: path("M4.616 21q-.691 0-1.153-.462T3 19.385v-8.77q0-.69.463-1.152T4.615 9h2V3.808q0-.343.234-.576T7.43 3h4.881q.346 0 .576.232t.23.576v2q0 .343-.233.575t-.575.233H7.616v6.192q0 .507.341.85t.847.342t.85-.343t.346-.85V9h9.385q.69 0 1.153.463T21 10.616v8.769q0 .69-.462 1.153T19.385 21z");
}
</style><path class="s54huzb7l"/>`,
		"fallback": "material-symbols-light:markunread-mailbox-rounded",
	});
}

export default Component;
