import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5cgbab2j.css';

const viewBox = {"width":768,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5cgbab2j"/>`,
		"fallback": "ls:keyboard",
	});
}

export default Component;
