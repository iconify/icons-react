import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clcn2dq2d.css';

const viewBox = {"width":1550,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clcn2dq2d"/>`,
		"fallback": "websymbol:reply-all",
	});
}

export default Component;
