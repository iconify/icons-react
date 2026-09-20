import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl8db2yaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl8db2yaf"/>`,
		"fallback": "token:signa",
	});
}

export default Component;
