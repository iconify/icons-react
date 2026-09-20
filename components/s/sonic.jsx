import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmu0x6ayu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmu0x6ayu"/>`,
		"fallback": "token:sonic",
	});
}

export default Component;
