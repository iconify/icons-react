import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db2kxhb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db2kxhb1n"/>`,
		"fallback": "iconaut:pi-solid",
	});
}

export default Component;
