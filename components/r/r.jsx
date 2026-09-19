import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trg-1n7hi.css';

const viewBox = {"width":287,"height":654};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trg-1n7hi"/>`,
		"fallback": "ls:r",
	});
}

export default Component;
