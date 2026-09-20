import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbhxs5bet.css';
import '../../css/y/yokltxlsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbhxs5bet"/><path class="yokltxlsr"/>`,
		"fallback": "token:mtv",
	});
}

export default Component;
