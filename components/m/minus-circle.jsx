import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxan9g_6r.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxan9g_6r"/>`,
		"fallback": "websymbol:minus-circle",
	});
}

export default Component;
