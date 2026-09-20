import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s-ya-6bwr.css';
import '../../css/w/w5z08gbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s-ya-6bwr"/><path class="w5z08gbyk"/></g>`,
		"fallback": "thesvg:skywork",
	});
}

export default Component;
