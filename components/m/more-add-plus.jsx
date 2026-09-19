import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb_u_rrkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb_u_rrkn"/>`,
		"fallback": "guidance:more-add-plus",
	});
}

export default Component;
