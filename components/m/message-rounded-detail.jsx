import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnx-vib2x.css';
import '../../css/i/irjsvsbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnx-vib2x"/><path class="irjsvsbnf"/>`,
		"fallback": "bx:message-rounded-detail",
	});
}

export default Component;
