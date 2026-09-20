import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xkwp_knpu.css';
import '../../css/c/ccu47-vcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="xkwp_knpu"/><path class="ccu47-vcd"/></g>`,
		"fallback": "streamline-logos:mcafee-logo",
	});
}

export default Component;
