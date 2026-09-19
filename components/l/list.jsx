import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmuq50euc.css';

const viewBox = {"width":768,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmuq50euc"/>`,
		"fallback": "ls:list",
	});
}

export default Component;
