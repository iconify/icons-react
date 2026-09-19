import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyb7ezbvr.css';
import '../../css/g/g_zlf0bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyb7ezbvr"/><circle class="g_zlf0bqh"/>`,
		"fallback": "circum:money-bill",
	});
}

export default Component;
