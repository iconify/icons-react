import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx9__mp1q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx9__mp1q"/>`,
		"fallback": "pajamas:status-cancelled",
	});
}

export default Component;
