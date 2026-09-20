import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwv90wbgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwv90wbgj"/>`,
		"fallback": "ix:minus",
	});
}

export default Component;
