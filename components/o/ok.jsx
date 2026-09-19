import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fytkv-bas.css';

const viewBox = {"width":1179,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fytkv-bas"/>`,
		"fallback": "websymbol:ok",
	});
}

export default Component;
