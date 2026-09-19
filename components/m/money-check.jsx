import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eie2zmxnl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eie2zmxnl"/>`,
		"fallback": "fa7-solid:money-check",
	});
}

export default Component;
