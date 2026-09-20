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
		"content": `<style>.wz5i_cc0o {
  fill: currentColor;
  d: path("M4 20v-1h10.366v1zm0-3.384v-1h16v1zm1.616-3.385q-.691 0-1.153-.463T4 11.616v-6q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v6q0 .69-.462 1.152t-1.153.463zm0-1h12.769q.269 0 .442-.173t.173-.442v-6q0-.27-.173-.443T18.384 5H5.616q-.27 0-.443.173T5 5.616v6q0 .269.173.442t.443.173m-.616 0V5z");
}
</style><path class="wz5i_cc0o"/>`,
		"fallback": "material-symbols-light:page-menu-ios-outline",
	});
}

export default Component;
