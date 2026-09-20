import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/outf-5w6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="outf-5w6n"/>`,
		"fallback": "mingcute:square-arrow-left-fill",
	});
}

export default Component;
