import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/b/blqv12b3r.css';
import '../../css/e/ejdxgubta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="blqv12b3r"/><path class="ejdxgubta"/></g>`,
		"fallback": "catppuccin:verilog",
	});
}

export default Component;
