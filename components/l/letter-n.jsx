import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9ou1wbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9ou1wbab"/>`,
		"fallback": "mdi:letter-n",
	});
}

export default Component;
