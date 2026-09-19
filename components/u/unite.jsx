import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz8difb4r.css';
import '../../css/q/qne2hd_ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz8difb4r"/><path class="qne2hd_ir"/>`,
		"fallback": "bx:unite",
	});
}

export default Component;
