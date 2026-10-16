import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gszk2pb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gszk2pb4y"/>`,
		"fallback": "andrsrxn:list-x",
	});
}

export default Component;
