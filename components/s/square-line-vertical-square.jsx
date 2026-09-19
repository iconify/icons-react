import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnv5u_5dq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnv5u_5dq"/>`,
		"fallback": "f7:square-line-vertical-square",
	});
}

export default Component;
