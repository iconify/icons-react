import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ask_q2bvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ask_q2bvx"/>`,
		"fallback": "ix:rotate-90-right",
	});
}

export default Component;
