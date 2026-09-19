import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksw-7fbia.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksw-7fbia"/>`,
		"fallback": "whh:markerup",
	});
}

export default Component;
