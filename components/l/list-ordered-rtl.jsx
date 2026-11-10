import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljsq74bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljsq74bje"/>`,
		"fallback": "andrsrxn:list-ordered-rtl",
	});
}

export default Component;
